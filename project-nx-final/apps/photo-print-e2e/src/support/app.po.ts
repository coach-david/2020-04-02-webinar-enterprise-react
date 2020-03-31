export const getCodeInput = () => cy.get('[name="code"]');
export const getLoginButton = () => cy.get('button[type="submit"]');
export const getUrl = () => cy.url({ log: true });
