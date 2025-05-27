import { create } from "zustand";

export const useOrderStore = create((set) => ({
    user: {
        first_name: "",
        last_name: "",
        patronymic: "",
        phone: "",
        email: "",
        payment_method: "cash",
    },
    passengers: [],
    departure: {
        route_direction_id: "",
        seats: [],
    },
    arrival: {
        route_direction_id: "",
        seats: [],
    },

    setUser: (user) => set({ user }),
    setPassengers: (passengers) => set({ passengers }),
    setDeparture: (departure) => set({ departure }),
    setArrival: (arrival) => set({ arrival }),

    resetOrder: () =>
        set({
            user: {
                first_name: "",
                last_name: "",
                patronymic: "",
                phone: "",
                email: "",
                payment_method: "cash",
            },
            passengers: [],
            departure: {
                route_direction_id: "",
                seats: [],
            },
            arrival: {
                route_direction_id: "",
                seats: [],
            },
        }),
}));
