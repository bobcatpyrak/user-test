import { PasswordHidePipe } from './password-hide.pipe';

describe('PasswordHidePipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordHidePipe();
    expect(pipe).toBeTruthy();
  });
});
