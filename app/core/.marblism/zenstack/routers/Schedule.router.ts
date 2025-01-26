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

        createMany: procedure.input($Schema.ScheduleInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).schedule.createMany(input as any))),

        create: procedure.input($Schema.ScheduleInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).schedule.create(input as any))),

        deleteMany: procedure.input($Schema.ScheduleInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).schedule.deleteMany(input as any))),

        delete: procedure.input($Schema.ScheduleInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).schedule.delete(input as any))),

        findFirst: procedure.input($Schema.ScheduleInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).schedule.findFirst(input as any))),

        findMany: procedure.input($Schema.ScheduleInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).schedule.findMany(input as any))),

        findUnique: procedure.input($Schema.ScheduleInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).schedule.findUnique(input as any))),

        updateMany: procedure.input($Schema.ScheduleInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).schedule.updateMany(input as any))),

        update: procedure.input($Schema.ScheduleInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).schedule.update(input as any))),

        count: procedure.input($Schema.ScheduleInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).schedule.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ScheduleCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScheduleCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScheduleCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScheduleCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ScheduleCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScheduleCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ScheduleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ScheduleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScheduleCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScheduleCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ScheduleGetPayload<T>, Context>) => Promise<Prisma.ScheduleGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ScheduleDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScheduleDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScheduleDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScheduleDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ScheduleDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScheduleDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ScheduleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ScheduleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScheduleDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScheduleDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ScheduleGetPayload<T>, Context>) => Promise<Prisma.ScheduleGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ScheduleFindFirstArgs, TData = Prisma.ScheduleGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ScheduleFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ScheduleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ScheduleFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ScheduleFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ScheduleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ScheduleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ScheduleFindManyArgs, TData = Array<Prisma.ScheduleGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ScheduleFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ScheduleGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ScheduleFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ScheduleFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ScheduleGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ScheduleGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ScheduleFindUniqueArgs, TData = Prisma.ScheduleGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ScheduleFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ScheduleGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ScheduleFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ScheduleFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ScheduleGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ScheduleGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ScheduleUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScheduleUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScheduleUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScheduleUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ScheduleUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ScheduleUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ScheduleGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ScheduleGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ScheduleUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ScheduleUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ScheduleGetPayload<T>, Context>) => Promise<Prisma.ScheduleGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ScheduleCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ScheduleCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ScheduleCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ScheduleCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ScheduleCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ScheduleCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ScheduleCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ScheduleCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
