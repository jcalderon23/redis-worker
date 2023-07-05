import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * @swagger
 * components:
 *  schemas:
 *    Queues:
 *      type: object
 *      properties:
 *        id:
 *          type: uuid
 *          example: 3898b2a6-4d13-4658-9bd1-1091cc8ee06a
 */

@Entity()
export class Traceability extends BaseEntity {
  @ObjectIdColumn()
  id: string;

  @Column({ nullable: true })
  type_operation: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
