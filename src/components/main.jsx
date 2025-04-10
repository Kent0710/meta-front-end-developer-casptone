import { fetchAPI, submitAPI } from "../api";

import HomePage from "../pages/homepage";
import BookingPage from "../pages/booking-page";
import ConfirmedBooking from "./confirmed-booking";
import About from "./about";
import UnderDevelopment from "./under-development";

import { Route, Routes, useNavigate } from "react-router";
import { useReducer } from "react";
import Highlights from "./highlights";

const Main = () => {
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate("/confirmed");
        }
    };

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/highlights" element={<Highlights />}></Route>
                <Route
                    path="/bookingPage"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                            submitForm={submitForm}
                        />
                    }
                ></Route>
                <Route path="/confirmed" element={<ConfirmedBooking />} />
                <Route path="/orderOnline" element={<UnderDevelopment />} />
                <Route path="/login" element={<UnderDevelopment />} />
            </Routes>
        </main>
    );
};

export default Main;

const updateTimes = (state, action) => {
    if (action.type === "update_times") {
        const selectedDate = new Date(action.payload);
        return fetchAPI(selectedDate);
    }
    return state;
};


const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};