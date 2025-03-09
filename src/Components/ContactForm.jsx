import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        city: "",
        question: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({}); // Track user interaction

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };
    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.question.trim()) newErrors.question = "Question is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", formData);
            alert("Form submitted successfully!");
            setFormData({ name: "", phone: "", city: "", question: "" });
            setErrors({});
            setTouched({}); // Reset touched state
        }
    };
    

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <div className="card shadow-lg p-4 border-0 rounded">
                        <h2 className="text-center text-dark fw-bold">Get Free Consultation</h2>
                        <p className="text-center text-muted">Opinion from our experts</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                    placeholder="+92-XXX-XXXXXXX"
                                />
                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${errors.city ? "is-invalid" : ""}`}
                                    placeholder="Lahore"
                                />
                                {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Your Question</label>
                                <textarea
                                    name="question"
                                    value={formData.question}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`form-control ${errors.question ? "is-invalid" : ""}`}
                                    placeholder="I want to install 1KV Solar System"
                                    rows="4"
                                ></textarea>
                                {errors.question && <div className="invalid-feedback">{errors.question}</div>}
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark rounded-pill btn-md w-100 d-flex justify-content-center align-items-center fw-bold">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <style>
                {`
          input:focus, textarea:focus {
            outline: none !important;
            box-shadow: none !important;
            border-color: inherit !important;
          }
        `}
            </style>
        </div>
    );
};

export default ContactForm;
