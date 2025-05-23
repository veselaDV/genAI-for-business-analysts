
-- Comprehensive analysis of electronics e-commerce dataset -- 1. Overall satisfaction metrics 
SELECT  
COUNT(*) AS total_reviews, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction, 
COUNT(CASE WHEN satisfaction_score >= 4 THEN 1 END) AS satisfied_customers, 
ROUND(COUNT(CASE WHEN satisfaction_score >= 4 THEN 1 END) * 100.0 / COUNT(*), 2) AS 
satisfied_percentage, 
COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) AS would_recommend, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_rate 
FROM electronics_ecommerce;
 
-- 2. Satisfaction by product category 
SELECT  
product_category, 
COUNT(*) AS total_purchases, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction, 
COUNT(CASE WHEN satisfaction_score = 5 THEN 1 END) AS five_star_ratings, 
COUNT(CASE WHEN satisfaction_score = 1 OR satisfaction_score = 2 THEN 1 END) AS 
unsatisfied_customers, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_rate 
FROM electronics_ecommerce 
GROUP BY product_category 
ORDER BY avg_satisfaction DESC; 

-- 3. Most common reported issues 
SELECT  
reported_issue, 
COUNT(*) AS frequency, 
ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM electronics_ecommerce WHERE 
reported_issue != 'None'), 2) AS percentage_of_issues, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction_with_issue 
FROM electronics_ecommerce 
WHERE reported_issue != 'None' 
GROUP BY reported_issue 
ORDER BY frequency DESC 
LIMIT 10; 

-- 4. Issues by product category 
SELECT  
product_category, 
reported_issue, 
COUNT(*) AS frequency 
FROM electronics_ecommerce 
WHERE reported_issue != 'None' 
GROUP BY product_category, reported_issue 
ORDER BY product_category, frequency DESC; 

-- 5. Price range analysis with satisfaction 
SELECT  
price_range, 
COUNT(*) AS total_products, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction, 
COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) AS recommendations, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_rate 
FROM electronics_ecommerce 
GROUP BY price_range 
ORDER BY REGEXP_REPLACE(price_range, '[^0-9]', '') :: INTEGER; 

-- 6. Delivery performance analysis 
SELECT  
CASE  
WHEN delivery_days <= 2 THEN '1-2 days (Fast)' 
WHEN delivery_days <= 5 THEN '3-5 days (Standard)' 
ELSE '6+ days (Slow)' 
END AS delivery_speed, 
COUNT(*) AS total_orders, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_rate 
FROM electronics_ecommerce 
GROUP BY delivery_speed 
ORDER BY delivery_speed; 

-- 7. Monthly trends (purchase volume and satisfaction) 
SELECT  
SUBSTRING(purchase_date, 1, 7) AS month, 
COUNT(*) AS total_purchases, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_rate 
FROM electronics_ecommerce 
GROUP BY month 
ORDER BY month; 

-- 8. Satisfaction correlation with would recommend 
SELECT  
satisfaction_score, 
COUNT(*) AS total_reviews, 
COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) AS would_recommend, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_percentage 
FROM electronics_ecommerce 
GROUP BY satisfaction_score 
ORDER BY satisfaction_score; 

-- 9. Key insights: Products with satisfaction issues 
SELECT  
product_name, 
product_category, 
satisfaction_score, 
review_text, 
reported_issue, 
would_recommend 
FROM electronics_ecommerce 
WHERE satisfaction_score <= 2 
ORDER BY satisfaction_score; 

-- 10. Best performing products 
SELECT  
product_name, 
product_category, 
satisfaction_score, 
review_text, 
would_recommend, 
price_range 
FROM electronics_ecommerce 
WHERE satisfaction_score = 5 
ORDER BY product_category; 

-- 11. Sentiment analysis from review text (simple version) 
SELECT  
product_category, 
CASE  
WHEN review_text LIKE '%amazing%' OR review_text LIKE '%excellent%' OR  
review_text LIKE '%perfect%' OR review_text LIKE '%great%' OR 
review_text LIKE '%love%' OR review_text LIKE '%best%' THEN 'Highly Positive' 
WHEN review_text LIKE '%good%' OR review_text LIKE '%nice%' OR  
review_text LIKE '%decent%' OR review_text LIKE '%fine%' THEN 'Positive' 
WHEN review_text LIKE '%average%' OR review_text LIKE '%ok%' OR  
review_text LIKE '%okay%' OR review_text LIKE '%could be better%' THEN 'Neutral' 
WHEN review_text LIKE '%disappointed%' OR review_text LIKE '%poor%' OR  
review_text LIKE '%bad%' OR review_text LIKE '%issue%' OR 
review_text LIKE '%problem%' THEN 'Negative' 
WHEN review_text LIKE '%terrible%' OR review_text LIKE '%awful%' OR  
review_text LIKE '%horrible%' OR review_text LIKE '%worst%' THEN 'Highly Negative' 
ELSE 'Neutral' 
END AS sentiment, 
COUNT(*) AS count 
FROM electronics_ecommerce 
GROUP BY product_category, sentiment 
ORDER BY product_category,  
CASE  
WHEN sentiment = 'Highly Positive' THEN 1 
WHEN sentiment = 'Positive' THEN 2 
WHEN sentiment = 'Neutral' THEN 3 
WHEN sentiment = 'Negative' THEN 4 
WHEN sentiment = 'Highly Negative' THEN 5 
END; 

-- 12. Correlation between reported issues and recommendation status 
SELECT  
reported_issue, 
COUNT(*) AS total, 
COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) AS would_recommend, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_percentage 
FROM electronics_ecommerce 
WHERE reported_issue != 'None' 
GROUP BY reported_issue 
ORDER BY recommendation_percentage DESC; 

-- 13. Recommendation rates by delivery speed and satisfaction 
SELECT  
CASE  
WHEN delivery_days <= 2 THEN '1-2 days (Fast)' 
WHEN delivery_days <= 5 THEN '3-5 days (Standard)' 
ELSE '6+ days (Slow)' 
END AS delivery_speed, 
satisfaction_score, 
COUNT(*) AS total, 
COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) AS would_recommend, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / COUNT(*), 
2) AS recommendation_percentage 
FROM electronics_ecommerce 
GROUP BY delivery_speed, satisfaction_score 
ORDER BY delivery_speed, satisfaction_score; -- 14. Product categories with high issue rates 
SELECT  
product_category, 
COUNT(*) AS total_products, 
COUNT(CASE WHEN reported_issue != 'None' THEN 1 END) AS products_with_issues, 
ROUND(COUNT(CASE WHEN reported_issue != 'None' THEN 1 END) * 100.0 / COUNT(*), 2) 
AS issue_percentage, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction 
FROM electronics_ecommerce 
GROUP BY product_category 
ORDER BY issue_percentage DESC; 

-- 15. Comprehensive product analysis 
WITH product_metrics AS ( 
SELECT  
product_name, 
product_category, 
COUNT(*) AS purchase_count, 
ROUND(AVG(satisfaction_score), 2) AS avg_satisfaction, 
COUNT(CASE WHEN reported_issue != 'None' THEN 1 END) AS issue_count, 
ROUND(COUNT(CASE WHEN would_recommend = 'TRUE' THEN 1 END) * 100.0 / 
COUNT(*), 2) AS recommendation_rate, 
ROUND(AVG(delivery_days), 1) AS avg_delivery_days, 
price_range 
FROM electronics_ecommerce 
GROUP BY product_name, product_category, price_range 
) 
SELECT  
product_name, 
product_category, 
purchase_count, 
avg_satisfaction, 
issue_count, 
ROUND(issue_count * 100.0 / purchase_count, 2) AS issue_percentage, 
recommendation_rate, 
avg_delivery_days, 
price_range, 
CASE  
WHEN avg_satisfaction >= 4.5 AND recommendation_rate >= 90 THEN 'Top Performer' 
WHEN avg_satisfaction >= 4.0 AND recommendation_rate >= 80 THEN 'Strong Performer' 
WHEN avg_satisfaction <= 2.5 OR recommendation_rate <= 50 THEN 'Needs Improvement' 
ELSE 'Average Performer' 
END AS performance_category 
FROM product_metrics 
ORDER BY avg_satisfaction DESC, recommendation_rate DESC;
