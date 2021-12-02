import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class OriginMigration1638159678829 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'origin',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'foodsId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'food',
      new TableForeignKey({
        columnNames: ['originId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'origin',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'origin',
      new TableForeignKey({
        columnNames: ['foodsId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'food',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('origin');
    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes('foodsId'),
    );
    queryRunner.dropForeignKey('origin', foreignKey);
    queryRunner.dropTable('origin');
  }
}
