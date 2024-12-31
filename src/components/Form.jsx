import { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData({
            fullName: "",
            phone: "",
            message: "",
            email: "",
        });
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__group form__group--row">
                <div className="form__group form__group--fullname">
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form__input"
                        placeholder="Adınız"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form__group form__group--phone">
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form__input"
                        placeholder="Telefon nömrəniz"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form__group form__group--email">
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="form__input"
                    placeholder="E-Mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form__group form__group--message">
                <textarea
                    id="message"
                    name="message"
                    className="form__textarea"
                    placeholder="Mesajınızı daxil edin"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="form__button">
                Göndər
            </button>
        </form>
    );
};

export default Form;
