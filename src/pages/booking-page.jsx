import BookingForm from "../components/booking-form";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <div>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
    );
}
