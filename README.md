
# 🩺 MedVoice AI - Medical Voice Assistant

An AI-powered voice assistant for healthcare professionals to record doctor-patient conversations, transcribe them using advanced speech recognition, and generate structured SOAP notes to reduce clinical documentation time.

## 🚀 One-Command Setup

To build and run the entire project:

```bash
npm run medvoice
```

For consecutive runs:
```bash
npm run dev
```

## ⚙️ Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **AI Services**: 
  - OpenAI GPT for medical analysis
  - Deepgram for speech-to-text transcription
- **Components**: Radix UI primitives
- **Voice Processing**: Web Audio API

## 🏥 Features

- **Voice Recording**: Real-time audio capture with medical terminology optimization
- **AI Transcription**: High-accuracy speech-to-text using Deepgram's medical model
- **SOAP Notes Generation**: Automated structured clinical documentation
- **Medical Intelligence**: AI-powered diagnostic insights and recommendations
- **Error Handling**: Comprehensive microphone access and permission management

## 🔧 Environment Setup

Create a `.env.local` file with your API keys:

```bash
DEEPGRAM_API_KEY=your_deepgram_key_here
OPENAI_API_KEY=your_openai_key_here
```

## 📱 Usage

1. Click "Start Recording" to begin capturing audio
2. Speak naturally during the patient consultation
3. Click "Stop Recording" when finished
4. View the AI-generated transcription and SOAP notes
5. Review and edit the clinical documentation as needed

## 🌟 Future Roadmap

- EHR integration (Epic, Cerner)
- Specialty-specific modules (Cardiology, Emergency Medicine)
- Multi-language support
- Clinical decision support
- Predictive analytics

---

**MedVoice AI** - Transforming healthcare documentation with intelligent voice technology.


