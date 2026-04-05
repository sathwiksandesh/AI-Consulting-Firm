from app.services.llm_service import generate_response

def strategy_agent(problem, research):
    prompt = f"""
    You are a business strategist.

    Problem:
    {problem}

    Research:
    {research}

    Create a detailed strategy to solve the problem.
    """
    return generate_response(prompt)