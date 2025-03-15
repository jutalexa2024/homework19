describe('Homepage', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/questions', {
        fixture: 'questions.json',
      }).as('getQuestions');
  
      cy.visit('http://localhost:3001');
    });
  
    it('visits the home page', () => {
      cy.url().should('include', 'localhost:3000');
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('starts the quiz and loads questions', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.wait('@getQuestions');
      cy.get('.card h2').should('be.visible');
    });
  
    it('answers all questions and completes the quiz', () => {
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
  
    it('allows restarting the quiz', () => {
      cy.get('button').contains('Start Quiz').click();
      cy.wait('@getQuestions');
  
      cy.fixture('questions.json').then((data) => {
        data.forEach((q: { answers: any[]; }) => {
          cy.get('.btn-primary')
            .contains(q.answers.find((a) => a.isCorrect).text)
            .click();
        });
      });
  
      cy.get('h2').contains('Quiz Completed').should('be.visible');
      cy.get('button').contains('Take New Quiz').click();
  
      cy.get('.spinner-border').should('not.exist');
      cy.get('.card h2').should('exist');
    });
  });
  