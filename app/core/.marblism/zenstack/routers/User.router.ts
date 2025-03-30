/* eslint-disable */
import * as _Schema from '@zenstackhq/runtime/zod/input';
import { type BaseConfig, db, type ProcBuilder, type RouterFactory } from '.';
import { checkMutate, checkRead } from '../helper';

// Debug: Check available schema keys
console.log("Schema Debug:", Object.keys(_Schema));

const $Schema = _Schema as typeof _Schema;

if (!$Schema.UserInputSchema) {
  throw new Error("❌ UserInputSchema is missing! Run `pnpm run crud:sync` to fix.");
}

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>
) {
  return router({
    createMany: procedure
      .input($Schema.UserInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) => {
        if (!input?.data || !Array.isArray(input.data)) {
          throw new Error('❌ Invalid input data for createMany');
        }
        return checkMutate(
          Promise.all(input.data.map((user) => db(ctx).user.create({ data: user })))
        );
      }),

    create: procedure
      .input($Schema.UserInputSchema.create)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create({ data: input }))),

    deleteMany: procedure
      .input($Schema.UserInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany({ where: input?.where }))),

    delete: procedure
      .input($Schema.UserInputSchema.delete)
      .mutation(async ({ ctx, input }) => {
        if (!input?.where) {
          throw new Error("❌ Missing 'where' condition for delete operation.");
        }
        return checkMutate(db(ctx).user.delete({ where: input.where }));
      }),

    findFirst: procedure
      .input($Schema.UserInputSchema.findFirst.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).user.findFirst({ where: input?.where }))),

    findMany: procedure
      .input($Schema.UserInputSchema.findMany.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).user.findMany({ where: input?.where }))),

    findUnique: procedure
      .input($Schema.UserInputSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).user.findUnique({ where: input?.where }))),

    updateMany: procedure
      .input($Schema.UserInputSchema.updateMany)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany({ data: input?.data, where: input?.where }))),

    update: procedure
      .input($Schema.UserInputSchema.update)
      .mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update({ where: input?.where, data: input?.data }))),

    count: procedure
      .input($Schema.UserInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).user.count({ where: input?.where })))
  });
}
