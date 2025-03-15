import Quiz from "../../client/src/components/Quiz";

describe('<Quiz />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions', {
      fixture: 'questions.json',
    }).as('getQuestions');
  });

  it('renders the component', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz and loads questions', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('.card h2').should('be.visible');
  });

  it('allows answering a question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.get('.btn-primary').eq(0).click(); // Clicks first answer button
    cy.get('.card h2').should('be.visible'); // Check if next question is displayed
  });

  it('completes the quiz and shows score', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.fixture('questions.json').then((data) => {
      data.forEach((q: { answers: any[]; }, index: number) => {
        cy.get('.btn-primary')
          .contains(q.answers.find((a) => a.isCorrect).text)
          .click();

        if (index < data.length - 1) {
          cy.get('.card h2').should('exist');
        }
      });
    });

    cy.get('h2').contains('Quiz Completed').should('be.visible');
    cy.get('.alert-success').should('contain.text', 'Your score:');
  });
});
