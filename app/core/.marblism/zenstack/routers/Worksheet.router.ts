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

        createMany: procedure.input($Schema.WorksheetInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).worksheet.createMany(input as any))),

        create: procedure.input($Schema.WorksheetInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).worksheet.create(input as any))),

        deleteMany: procedure.input($Schema.WorksheetInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).worksheet.deleteMany(input as any))),

        delete: procedure.input($Schema.WorksheetInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).worksheet.delete(input as any))),

        findFirst: procedure.input($Schema.WorksheetInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).worksheet.findFirst(input as any))),

        findMany: procedure.input($Schema.WorksheetInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).worksheet.findMany(input as any))),

        findUnique: procedure.input($Schema.WorksheetInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).worksheet.findUnique(input as any))),

        updateMany: procedure.input($Schema.WorksheetInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).worksheet.updateMany(input as any))),

        update: procedure.input($Schema.WorksheetInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).worksheet.update(input as any))),

        count: procedure.input($Schema.WorksheetInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).worksheet.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.WorksheetCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorksheetCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorksheetCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorksheetCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.WorksheetCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorksheetCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorksheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorksheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorksheetCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorksheetCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorksheetGetPayload<T>, Context>) => Promise<Prisma.WorksheetGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.WorksheetDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorksheetDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorksheetDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorksheetDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.WorksheetDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorksheetDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorksheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorksheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorksheetDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorksheetDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorksheetGetPayload<T>, Context>) => Promise<Prisma.WorksheetGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.WorksheetFindFirstArgs, TData = Prisma.WorksheetGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.WorksheetFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorksheetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorksheetFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorksheetFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorksheetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorksheetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.WorksheetFindManyArgs, TData = Array<Prisma.WorksheetGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.WorksheetFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.WorksheetGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorksheetFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.WorksheetFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.WorksheetGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.WorksheetGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.WorksheetFindUniqueArgs, TData = Prisma.WorksheetGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.WorksheetFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.WorksheetGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.WorksheetFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.WorksheetFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.WorksheetGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.WorksheetGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.WorksheetUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorksheetUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorksheetUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorksheetUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.WorksheetUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.WorksheetUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.WorksheetGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.WorksheetGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.WorksheetUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.WorksheetUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.WorksheetGetPayload<T>, Context>) => Promise<Prisma.WorksheetGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.WorksheetCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorksheetCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.WorksheetCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.WorksheetCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.WorksheetCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.WorksheetCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.WorksheetCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.WorksheetCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
