import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("cookenu_users")
        .select("*")
        .where({ email });

      return user[0] && User.toUserModel(user[0]);
    } catch (e) {
      throw new Error(e.sqlMessage || e.message);
    }
  };

  public async createUser(user: User): Promise<void> {
    try {
        await BaseDatabase.connection("cookenu_users")
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            });
    }
    catch (e) {
        throw new Error(e.sqlMessage || e.message);
    }
  };

  public async getAllUsers(): Promise<User[]> {
    try{
    const users = await BaseDatabase.connection("cookenu_users")
      .select("id", "name", "email", "role")

    return users.map((user => User.toUserModel(user)))
    }
    catch (e) {
      throw new Error(e.sqlMessage || e.message);
    }
  }
};
