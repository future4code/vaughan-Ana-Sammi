import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("cookenu_users")
        .select("*")
        .where({ email });

      return User.toUserModel(user[0]);
    } catch (e) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
}
