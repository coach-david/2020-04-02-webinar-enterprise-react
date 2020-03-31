import { getCodeInput, getLoginButton } from '../support/app.po';

describe('photo-print', () => {
  beforeEach(() => cy.visit('/'));

  it('should redirect to /login', () => {
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login')
    })
  });

  it('should display login form', () => {
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getCodeInput().should('exist');
    getLoginButton().contains('Login')
  });

  it('should login', () => {
    // Custom command example, see `../support/commands.ts` file
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    cy.login('test');

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })
});
