import { MigrationInterface, QueryRunner } from 'typeorm';

export class userPopulate1619461878229 implements MigrationInterface {
  name = 'userPopulate1619461878229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const objtosave = [
      { name: 'a', email: 'a@email.com' },
      { name: 'b', email: 'b@email.com' },
      { name: 'c', email: 'c@email.com' },
      { name: 'd', email: 'd@email.com' },
    ];
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(500) NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );

    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('user')
      .values(objtosave)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
