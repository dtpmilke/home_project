export class RefreshTokenMockup {
  static response = {
    success: {
      token: +(new Date()) + Math.random(),
      refreshToken: +(new Date()) + Math.random(),
    }
  }
}
