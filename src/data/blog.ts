export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastmod: string;
  image: string;
  tags: string[];
  categories: string[];
  content: string;
}

export const categoryColors: Record<string, string> = {
  AI: "#F85149",
  Ollama: "#D29922",
  RAG: "#2F81F7",
};

export const posts: BlogPost[] = [
  {
    slug: "cve-exploit-proj",
    title: "Local CVE Exploitability Analyzer",
    description: "Automated CVE exploitability assessment across multiple sites",
    date: "2025-10-09",
    lastmod: "2025-10-09",
    image: "/blog/rivendell.jpg",
    tags: ["Project"],
    categories: ["AI", "RAG"],
    content: `## Project Goal

The **Local CVE Exploitability Analyzer** project implements an automated system for assessing the exploitability of Common Vulnerabilities and Exposures (CVEs).

The core functionality is built upon a **Retrieval-Augmented Generation (RAG)** architecture using two local components:
- Ollama for the Language Model (LLM) and embeddings
- ChromaDB for the vector store; emulating the multi-LLM agentic framework described in the project plan.

The objective is to develop an automated system for assessing the exploitability of Common Vulnerabilities and Exposures (CVEs). The system uses a multi-LLM agentic framework to perform comprehensive analysis and provide a clear, actionable "proof of exploitability" score or narrative.

---

## Methodology & Technical Approach

The system leverages an agentic AI framework where multiple specialized LLMs (agents) work together under a central orchestration layer. This approach deconstructs the CVE analysis into specialized functions, minimizing the risk of hallucination and allowing for targeted fine-tuning and debugging.

### Agent Roles & Responsibilities

The three conceptual agents are functionally implemented within the logic of \`run_system.py\` and the RAG chain's prompt structure:

- **Data Retrieval Agent:** Implemented by the \`fetch_and_save_cve\` function. Retrieves all relevant CVE information from external sources like **NVD** and **MITRE** and gathering exploitation evidence from **CISA KEV** and **Exploit-DB**.

- **Vulnerability Analysis Agent:** The first stage of the \`run_rag_chain\`, where the LLM's Chain of Thought (Steps 1-3) analyzes the data retrieved from the vector store to interpret the vulnerability's nature, root cause, and potential impact.

- **Exploit Assessment Agent:** The second stage of the \`run_rag_chain\`, where the LLM's Chain of Thought (Steps 4-7) synthesizes the analysis, evaluates exploitability based on PoC code, and determines the final Verdict and Mitigations & Fixes.

---

## Core Programs

### \`run_system.py\`: The RAG Engine

This Python script is the **backend analysis engine** and RAG implementation. It handles all data ingestion, vector store management, and the final LLM-based analysis.

| Function | Description | Agent Role |
| :--- | :--- | :--- |
| \`clear_data_directory\` | Clears previous run's data and vector database | Orchestration |
| \`fetch_exploit_db_id\` | Searches Exploit-DB for associated exploit IDs | Data Retrieval |
| \`fetch_exploit_db_poc\` | Fetches raw PoC code from Exploit-DB | Data Retrieval |
| \`fetch_and_save_cve\` | Fetches from NVD, MITRE, and CISA KEV | Data Retrieval |
| \`build_vector_store\` | Creates ChromaDB vector store with embeddings | RAG Setup |
| \`run_rag_chain\` | Core analysis via LangChain RAG pipeline | Analysis & Assessment |

### \`app.py\`: The Streamlit Frontend

Provides the **Orchestration Layer** interface. Uses Streamlit for a clean UI where users input a CVE ID and initiate the full analysis pipeline with real-time logging.

---

## Program Interaction Flow

1. User enters CVE ID in Streamlit and clicks "Run Analysis"
2. \`app.py\` calls \`clear_data_directory\` for clean state
3. \`fetch_and_save_cve\` gathers data from NVD, MITRE, CISA, Exploit-DB
4. \`build_vector_store\` chunks, embeds, and indexes into ChromaDB
5. \`run_rag_chain\` queries Ollama LLM with vector context
6. Final Markdown report rendered in Streamlit

---

## Results

![Data fetched! Building fresh vector store...](/blog/first.png)

![Database ready! Running LLM analysis on CVE...](/blog/second.png)

![Analysis Complete!](/blog/third.png)

![Report for CVE generated successfully!](/blog/final.png)`,
  },
  {
    slug: "intro-to-rag",
    title: "Approach to Retrieval-Augmented Generation (RAG)",
    description: "Vector Databases and Nomic Embed",
    date: "2025-10-03",
    lastmod: "2025-10-03",
    image: "/blog/balrog.jpg",
    tags: ["Informational"],
    categories: ["AI", "RAG"],
    content: `## RAG Structure

**Retrieval-Augmented Generation (RAG)** is a technique that uses Large Language Models (LLMs) with external, proprietary knowledge to improve accuracy and reduce "**hallucination**". The success of any RAG system relies entirely on its ability to quickly and accurately retrieve relevant context from a knowledge base.

- **Hallucination** is a phenomenon where the LLM generates a response that is plausible-sounding and fluent but is factually incorrect, nonsensical, or unfaithful to the source information.

This analysis focuses on the preferred, **structured approach** for RAG, which utilizes a dedicated **vector database** (like ChromaDB) and a specialized **embedding model** (i.e., Nomic Embed).

---

### Workflow Diagram

![RAG Flow](/blog/rag_flow.jpg)

---

## RAG Workflow Explained

The RAG workflow is divided into two distinct phases: the **Indexing Pipeline** (done offline) and the **Retrieval & Generation Pipeline** (done live).

### Phase 1: Indexing Pipeline (Pre-Processing)

1. **Raw Documents:** Source data: PDFs, text files, or CSV data
2. **Chunking:** Splitting large documents into smaller, manageable text sections
3. **Nomic Embed (Vectorization):** Converting text's semantic meaning into dense numerical arrays
4. **ChromaDB (Vector Store):** Storing vectors with corresponding text chunks for fast similarity search
5. **Vectors:** High-dimensional numerical data points ready for search

### Phase 2: Retrieval Pipeline (Query Time)

1. **User Query:** Natural language question from the end-user
2. **Nomic Embed:** Query vectorized through the same embedding model
3. **ChromaDB / KNN Search:** Finding mathematically closest vectors
4. **Top N Context Chunks:** Retrieved text chunks as factually grounded context
5. **Augmented Prompt:** Context combined with original query
6. **Final Answer:** LLM generates factually grounded response

---

## Benefits of Vector Databases

### Vector Databases vs. CSV

The fundamental difference lies in **Keyword Search versus Semantic Search**. A vector store transforms your knowledge base from simple storage into an intelligent, searchable index.

| Feature | CSV/Flat File | Vector Database (ChromaDB) |
| :--- | :--- | :--- |
| **Indexing** | Keyword-based | High-dimensional vector indexing (HNSW) |
| **Search Type** | Keyword (exact matches) | Semantic (meaning-based) |
| **Scalability** | Poor (linear) | Excellent (billions of vectors) |
| **Relevance** | Low precision | High precision |

### The Role of Nomic Embed

An embedding model transforms raw text into numerical representations called vectors. **Nomic Embed** provides the translation layer that makes semantic search possible.

- **High Fidelity:** Competitive with proprietary models, capturing subtle semantic relationships
- **Long Context Window:** Best for RAG, embeds larger chunks accurately
- **Structured Advantage:** Uniform high-dimensional space optimized for ChromaDB search`,
  },
  {
    slug: "local-ai-setup",
    title: "Local AI Setup",
    description: "Ollama + LocalGPT",
    date: "2025-10-01",
    lastmod: "2025-10-01",
    image: "/blog/ollama.png",
    tags: ["Tutorial"],
    categories: ["AI", "Ollama"],
    content: `## Install Ollama and Dependencies

This guide walks through installing **Ollama** to run large language models (LLMs) locally and then setting up **localGPT**, a system for local RAG (Retrieval-Augmented Generation).

### Environment Setup

It's highly recommended to use a **Python virtual environment** to isolate project dependencies.

\`\`\`bash
# Create a new virtual environment
python3 -m venv local-ai-env

# Activate the virtual environment
source local-ai-env/bin/activate
\`\`\`

### Install Homebrew (Without Admin Privileges)

If you do not have sudo or admin privileges, install Homebrew by cloning the repository:

\`\`\`bash
git clone https://github.com/Homebrew/brew.git ~/brew
export PATH="$HOME/brew/bin:$PATH"
echo 'export PATH="$HOME/brew/bin:$PATH"' >> ~/.zshrc
\`\`\`

### Install Ollama and System Dependencies

\`\`\`bash
brew install ollama
brew install libmagic
\`\`\`

### Fix Library Linking (macOS)

\`\`\`bash
export DYLD_LIBRARY_PATH="$HOME/brew/lib:$DYLD_LIBRARY_PATH"
\`\`\`

---

## Run Ollama Server and Download LLM

### Start the Ollama Server

Open a new terminal window and run:

\`\`\`bash
ollama serve
\`\`\`

### Download LLM

\`\`\`bash
ollama pull codellama:13b-instruct
ollama list
\`\`\`

---

## Setup and Run localGPT

### Clone and Prepare

\`\`\`bash
git clone https://github.com/PromtEngineer/localGPT.git
cd localGPT
pip install -r requirements.txt
npm install
\`\`\`

### Run localGPT

\`\`\`bash
python run_system.py
\`\`\`

### Access the Application

\`\`\`bash
open http://localhost:3000
\`\`\`

![Local GPT](/blog/local_gpt.jpg)

---

## Final Cleanup

When finished, close the terminal running \`ollama serve\` to stop the server. To exit the Python virtual environment:

\`\`\`bash
deactivate
\`\`\``,
  },
];
