import { db } from "@/lib/db";

const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: {
        token,
      },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: {
        email,
      },
    });
    return passwordResetToken;
  } catch (error) {
    return null;
  }
};

export { getPasswordResetTokenByToken, getPasswordResetTokenByEmail };
