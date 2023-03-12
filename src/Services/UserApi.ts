import { AllApi} from "./AllApi";

export const UserApi = AllApi.injectEndpoints({
    overrideExisting: false,
    endpoints: (builder) => ({
        getUsers: builder.query<any, void>({
            query: () => "users.json",
            providesTags: ["User"],
        })
    }),
});

export const { useGetUsersQuery } = UserApi;