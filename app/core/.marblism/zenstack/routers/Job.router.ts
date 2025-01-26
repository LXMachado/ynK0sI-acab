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

        createMany: procedure.input($Schema.JobInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).job.createMany(input as any))),

        create: procedure.input($Schema.JobInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).job.create(input as any))),

        deleteMany: procedure.input($Schema.JobInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).job.deleteMany(input as any))),

        delete: procedure.input($Schema.JobInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).job.delete(input as any))),

        findFirst: procedure.input($Schema.JobInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).job.findFirst(input as any))),

        findMany: procedure.input($Schema.JobInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).job.findMany(input as any))),

        findUnique: procedure.input($Schema.JobInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).job.findUnique(input as any))),

        updateMany: procedure.input($Schema.JobInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).job.updateMany(input as any))),

        update: procedure.input($Schema.JobInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).job.update(input as any))),

        count: procedure.input($Schema.JobInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).job.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.JobCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.JobCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobGetPayload<T>, Context>) => Promise<Prisma.JobGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.JobDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.JobDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobGetPayload<T>, Context>) => Promise<Prisma.JobGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.JobFindFirstArgs, TData = Prisma.JobGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.JobFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JobGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JobFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JobGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JobGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.JobFindManyArgs, TData = Array<Prisma.JobGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.JobFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.JobGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JobFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.JobGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.JobGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.JobFindUniqueArgs, TData = Prisma.JobGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.JobFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JobGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JobFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.JobFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JobGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JobGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.JobUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.JobUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JobUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JobGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JobGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JobUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JobUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JobGetPayload<T>, Context>) => Promise<Prisma.JobGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.JobCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JobCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.JobCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.JobCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.JobCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.JobCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.JobCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JobCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
