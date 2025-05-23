
# Manage Data for an Online Grocer Using MySQL Workbench

Date: May 21, 2025 Author: Vesela Velikova

#### Table of Contents
- <a href="#project-scenario" id="toc-project-scenario">Project Scenario</a>
- <a href="#analyze-customer-data-using-genai" id="toc-analyze-customer-data-using-genai">Analyze Customer Data Using GenAI</a>
- <a href="#generate-visualizations-with-genai" id="toc-generate-visualizations-with-genai">Generate Visualizations with GenAI</a>
- <a href="#generate-sql-queries-with-genai" id="toc-generate-sql-queries-with-genai">Generate SQL Queries with GenAI</a>
- <a href="#creating-a-comprehensive-business-intelligence-dashboard" id="toc-creating-a-comprehensive-business-intelligence-dashboard">Creating a Comprehensive Business Intelligence DashboardI</a>
- <a href="#findings" id="toc-findings">Findings</a>
- <a href="#key-insights-and-recommendations" id="toc-key-insights-and-recommendations">Key Insights and Recommendations</a>
- <a href="#conclusion" id="toc-conclusion">Conclusion</a>

## **Project Scenario**

A synthetic dataset Electronics e-commerce is generated. The data represent the satisfaction of the active customers of an electronics online store. The company tracks the overall satisfaction, reviews, raised issues and recommendations placed by the customers. The dataset is compiled through ClaudeAI by the following prompt: 

**Prompt:** *Create a dataset containing 100 rows, simulating user experience with products from an electronics e-commerce. It has to include user satisfaction, review, issue, user recommendation. Return the dataset in a delimited file.*


![Screenshot of Prompt 1](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/prompts/prompt_1.jpg)

A csv file containong the synthetic data can be found [here](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/sythetic_data_electronics_ecommerce.csv).

## **Analyze Customer Data Using GenAI**


**Prompt:** *Considering the product category, issue type and customer satisfaction and reviews, identify the top 3 common issues and top 3 insights that imply the product feature needed to be improved, to insure higher customer experience and satisfaction in electronics e-commerce.*

![Screenshot of Prompt 2](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/prompts/prompt_2.jpg)

![Screenshot of Prompt 3](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/prompts/prompt_3.jpg)


## **Generate Visualizations with GenAI**


**Prompt:** *Could you make a relevant chart based on the top 3 common themes and insights that visualize the analysis.*

![Screenshot of AI generated visualization 1](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/visualization/ai_db_1.jpg)

![Screenshot of AI generated visualization 2](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/visualization/ai_db_2.jpg)

![Screenshot of AI generated visualization 3](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/visualization/ai_db_3.jpg)

![Screenshot of AI generated visualization 4](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/visualization/db_4.jpg)


## **Generate SQL Queries with GenAI**

**Prompt:** *Generate me an SQL query that analyzes the customer feedback and transaction data for the electronics e-commerce dataset.*


![Screenshot of Prompt 4](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/prompts/prompt_4.jpg)


**Generated SQL code**

The generated SQL code by ClaudeAI can be found [here](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/SQL_queries.sql).


## **Creating a Comprehensive Business Intelligence Dashboard**

Tableau Public is used for the creation of a dashboard.  
The correlation between customer satisfaction, delivery times and reported issues are analyzed.

![Screenshot of Tableau Dashboard](https://github.com/veselaDV/genAI-for-business-analysts/blob/main/visualization/tableau_dashboard.jpg)

## **Findings**

**Battery Performance Issues** 
- Smartphones with battery issues had a 33% lower recommendation rate than those without. 
- Battery performance directly affects product usability and customer perception of value. Products with battery issues received satisfaction scores averaging 1.7 points lower than similar products without these issues. Battery problems were mentioned in 18% of negative reviews across portable electronics categories. 

**Software/Interface Experience**
- Products with interface or software issues had a 27% lower recommendation rate. 
- Software and interface issues significantly impact the user experience post-purchase. Smart TVs with interface lag had recommendation rates 40% lower than those without reported software issues. Setup difficulties for Smart Home Hubs created initial frustration that colored the entire ownership experience, even when the device functioned properly afterward. 

**Durability and Build Quality Concerns** 
- Products with durability concerns had a 65% lower recommendation rate than those without. 
- Durability issues often emerge after the initial satisfaction of purchase wears off, creating lasting negative impressions. Products with reported durability concerns showed a dramatic drop in recommendation rates, suggesting these issues significantly impact customer loyalty and word-of-mouth marketing. The timing of these problems (appearing after several weeks of use) suggests they may not be caught in initial quality testing.


## **Key Insights and Recommendations** 

- **Insight:** Enhanced Battery Management System 
- **Recommendation:** Develop an intelligent battery management system. This system should be implemented across portable electronics categories and prominently featured in product listings as "Smart Battery Technology" with standardized metrics for battery performance that go beyond simple hours of use. 
- **Insight:** Unified Setup and Interface Framework 
- **Recommendation:** Create a standardized setup and interface experience. This unified approach would significantly reduce the learning curve across products and address the frustration evident in reviews about complex setup processes and inconsistent interfaces. 
- **Insight:** Durability Testing Program & Transparency Initiative 
- **Recommendation:** Establish a comprehensive durability enhancement program. This initiative addresses the significant impact that durability issues have on customer satisfaction and recommendation rates, while creating a competitive advantage through transparency about product longevity. 
- **Insight:** Design Ergonomics for Audio Devices 
- **Recommendation:** Enhanced ergonomic design with adjustable or customizable fit options. 


## **Conclusion**
 
The analysis reveals that customer satisfaction in electronics e-commerce is heavily influenced by battery performance, software experience, and product durability. By implementing the recommended features - an enhanced battery management system, unified setup and interface framework, and a durability testing program - the e-commerce platform can address the most significant pain points identified in customer feedback. These improvements would likely increase overall satisfaction scores, boost recommendation rates, and reduce return rates for problematic product categories. Additionally, prominently featuring these enhanced capabilities in product listings would provide meaningful differentiation in a crowded marketplace where technical specifications alone often fail to communicate real-world user experience benefits.

