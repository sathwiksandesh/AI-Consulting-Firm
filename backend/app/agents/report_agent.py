from app.services.llm_service import generate_response

def report_agent(problem, research, strategy, finance):
    prompt = f"""
    You are a senior consultant.

    Create a CLEAN structured report.

    Format strictly:

    Executive Summary:
    (3-4 lines summary only)

    Key Insights:
    - 3 bullet points

    Strategy:
    - 3 bullet points

    Financial Plan:
    - 3 bullet points

    Keep it short and professional.
    """
    return generate_response(prompt)