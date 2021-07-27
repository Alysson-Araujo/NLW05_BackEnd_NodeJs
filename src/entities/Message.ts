import { StringifyOptions } from "node:querystring";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  UsingJoinColumnOnlyOnOneSideAllowedError,
  JoinColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {
  @PrimaryColumn()
  id: String;

  @Column()
  admin_id: String;

  @Column()
  text: string;

  @JoinColumn({ name: "user_id"})
  @ManyToOne(()=> User)
  user: User;


  @Column()
  user_id:string

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Message };
