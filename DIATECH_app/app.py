from flask import Flask, render_template, request, jsonify
import os
import joblib  

app = Flask(__name__, template_folder='templates')

model_path = os.path.join(os.getcwd(), 'static', 'models', 'model.pkl')
model = joblib.load(model_path)

@app.route('/')
def home():
    return render_template('homepage.html')

@app.route('/about')
def about():
    return render_template('aboutus.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if isinstance(data, dict):
            data = list(data.values())

        prediction = model.predict([data])

        prediction_text = "punya diabetes" if prediction[0] == 1 else "tidak punya diabetes"

        return jsonify({'prediction': prediction_text})
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
    