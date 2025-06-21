import React, { useState } from "react";
import axios from "axios";
import "./ModelDemoPage.css"; // Tu peux personnaliser ce style si besoin

export default function ModelDemoPage({ model }) {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(file ? URL.createObjectURL(file) : null);
        setResult(null);
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) return;
        setLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();
        formData.append("file", image);

        try {
            const response = await axios.post(model.endpoint, formData, {
                baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
                headers: { "Content-Type": "multipart/form-data" },
            });
            setResult(response.data);
        } catch (err) {
            setError("Erreur lors de la prédiction : " + (err?.response?.data?.detail || err.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="model-demo-root">
            <div className="model-demo-header">
                <i className={`bi bi-${model.icon} demo-model-icon`}></i>
                <h1>{model.name}</h1>
                <p className="demo-model-desc">{model.description}</p>
                <span className="badge demo-model-acc">Précision : {model.accuracy}%</span>
            </div>

            <form className="model-demo-form" onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input"
                />
                {preview && (
                    <img src={preview} alt="Aperçu" className="demo-img-preview" />
                )}
                <button
                    type="submit"
                    className="demo-btn"
                    disabled={loading || !image}
                >
                    {loading ? "Analyse en cours..." : "Analyser l’image"}
                </button>
            </form>

            {error && <div className="demo-error">{error}</div>}

            {result && (
                <div className="demo-result">
                    <h3>Résultats :</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
