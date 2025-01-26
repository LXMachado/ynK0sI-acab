/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.StockInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stock.createMany(input as any))),

        create: procedure.input($Schema.StockInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stock.create(input as any))),

        deleteMany: procedure.input($Schema.StockInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stock.deleteMany(input as any))),

        delete: procedure.input($Schema.StockInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stock.delete(input as any))),

        findFirst: procedure.input($Schema.StockInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).stock.findFirst(input as any))),

        findMany: procedure.input($Schema.StockInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).stock.findMany(input as any))),

        findUnique: procedure.input($Schema.StockInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).stock.findUnique(input as any))),

        updateMany: procedure.input($Schema.StockInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stock.updateMany(input as any))),

        update: procedure.input($Schema.StockInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stock.update(input as any))),

        count: procedure.input($Schema.StockInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).stock.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.StockCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.StockCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StockGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StockGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StockGetPayload<T>, Context>) => Promise<Prisma.StockGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.StockDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StockDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StockGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StockGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StockGetPayload<T>, Context>) => Promise<Prisma.StockGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StockFindFirstArgs, TData = Prisma.StockGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.StockFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StockGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StockFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.StockFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StockGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StockGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StockFindManyArgs, TData = Array<Prisma.StockGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.StockFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StockGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StockFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.StockFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StockGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StockGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StockFindUniqueArgs, TData = Prisma.StockGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StockFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StockGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StockFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StockFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StockGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StockGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.StockUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.StockUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StockUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StockGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StockGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StockUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StockUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StockGetPayload<T>, Context>) => Promise<Prisma.StockGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.StockCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.StockCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.StockCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.StockCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.StockCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.StockCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.StockCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.StockCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
