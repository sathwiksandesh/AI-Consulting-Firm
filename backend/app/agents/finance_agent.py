from app.services.llm_service import generate_response

def finance_agent(strategy):
    prompt = f"""
    You are a financial analyst.

    Strategy:
    {strategy}

    Provide:
    - Budget estimate
    - ROI expectations
    - Cost breakdown
    """
    return generate_response(prompt)