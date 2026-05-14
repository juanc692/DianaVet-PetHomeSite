import { StarFill, PatchCheckFill } from "react-bootstrap-icons";

export default function Comment({
    author,
    date,
    rating,
    text,
    avatar,
    verified
}) {

    return (

        <div
            className="p-3 rounded shadow-sm bg-white m-2"
            style={{
                width: "100%",
                maxWidth: "400px",
                minHeight: "220px"
            }}
        >

            {/* Header */}
            <div className="d-flex justify-content-between align-items-start">

                <div className="d-flex align-items-center gap-3">

                    {/* Avatar */}
                    <div
                        className="rounded-circle d-flex justify-content-center align-items-center"
                        style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#9E8277",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.5rem"
                        }}
                    >
                        {avatar}
                    </div>

                    {/* Nombre + fecha */}
                    <div className="text-start">

                        <h5 className="m-0 fw-bold">
                            {author}
                        </h5>

                        <small className="text-muted">
                            {date}
                        </small>

                    </div>

                </div>

                {/* Logo Google */}
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    style={{
                        width: "28px",
                        height: "28px"
                    }}
                />

            </div>

            {/* Rating */}
            <div className="d-flex align-items-center gap-1 mt-3">

                {[...Array(rating)].map((_, index) => (
                    <StarFill
                        key={index}
                        color="#FFC107"
                        size={20}
                    />
                ))}

                {verified && (
                    <PatchCheckFill
                        color="#4285F4"
                        size={18}
                        className="ms-2"
                    />
                )}

            </div>

            {/* Texto */}
            <p
                className="text-start mt-3"
                style={{
                    fontSize: "1.1rem"
                }}
            >
                {text}
            </p>

        </div>
    );
}