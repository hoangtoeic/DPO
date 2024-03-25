import { InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';

export async function getVehicle(
  id: number,
  trx?: EntityManager,
): Promise<boolean> {
  const transaction = trx ?? this.entityManager;
  try {
    const result = await transaction.query(`SELECT * FROM SP_Vehicle($1)`, [
      id,
    ]);
    return result;
  } catch (err) {
    console.log(err);
    throw new InternalServerErrorException(`Database Error!`);
  }
}
