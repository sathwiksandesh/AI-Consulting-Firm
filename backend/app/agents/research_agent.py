from app.services.llm_service import generate_response
def research_agent(problem):
    prompt = f"""
    You are a professional business consultant.

    Problem: {problem}

    Give a clear and structured response:

    1. Market Trends (3 points)
    2. Competitor Insights (3 points)
    3. Opportunities (3 points)

    Keep it concise and professional.
    """
    return generate_response(prompt)