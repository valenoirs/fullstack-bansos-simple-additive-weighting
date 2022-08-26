import { Schema, model } from "mongoose";
import { IUser, IUserMethod, UserModel } from "../interfaces/user";

// User Schema
const UserSchema: Schema = new Schema<IUser, UserModel, IUserMethod>({
  password: { type: String, required: true },
  username: { type: String, required: true },
});

// Schema method to authenticate user via password
UserSchema.method("comparePassword", function comparePassword(password) {
  // return compareSync(password, this.password);
  return password === this.password;
});

// Export User model
export const User = model<IUser, UserModel>("User", UserSchema);
