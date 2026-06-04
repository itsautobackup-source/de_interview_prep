window.PROBLEMS = [
  {
    "id": "DBX-AIR-001",
    "title": "Airflow DAG Design for Daily Metrics",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design an Airflow DAG for daily certified metrics. Include dependencies, retries, sensors, SLAs, backfills, and idempotency.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clear task boundaries",
      "Idempotent outputs",
      "Backfill approach",
      "Alerting and owner tags"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-AIR-003",
    "title": "dbt Model Standards",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Define dbt standards for staging, intermediate, marts, tests, docs, exposures, naming, and CI/CD.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Layering conventions",
      "Tests and docs",
      "CI checks",
      "Ownership and versioning"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-AIR-004",
    "title": "Failure Recovery Pattern",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "A daily revenue DAG failed after partially writing to gold tables. Walk through recovery, validation, and prevention.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Atomic writes or staging tables",
      "Idempotent rerun",
      "Data reconciliation",
      "Runbook clarity"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-BEH-001",
    "title": "Cross-Team Technical Alignment",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Tell me about a time you established standards across multiple teams without direct authority.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Situation complexity",
      "Influence strategy",
      "Specific standards",
      "Measured adoption/impact"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-BEH-002",
    "title": "Pipeline Failure Story",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Tell me about the worst data pipeline incident you owned. What happened, how did you recover, and what changed afterward?\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Ownership",
      "Incident response",
      "Root cause",
      "Preventive improvements"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-BEH-003",
    "title": "Senior Leadership Communication",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Tell me about presenting a data platform tradeoff to senior leadership.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clear framing",
      "Tradeoff options",
      "Recommendation",
      "Business impact"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-BEH-004",
    "title": "Ambiguous Problem",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Tell me about a time you solved an ambiguous data problem with unclear ownership.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Ambiguity reduction",
      "Stakeholder mapping",
      "Execution",
      "Outcome"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-001",
    "title": "Design a Dropbox File Dimension",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design the dimension table for files. Define grain, keys, SCD strategy, folder hierarchy handling, owner/team relationships, soft deletes, and privacy constraints.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clear grain: one row per logical file version or current logical file",
      "Handles SCD2 for ownership/location metadata",
      "Separates content hash from user-visible file name",
      "Explains partitioning/clustering and delete semantics"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-002",
    "title": "Design a Folder Hierarchy Model",
    "category": "Data Modeling",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Model nested folders for analytics. Compare adjacency list, closure table, path enumeration, and materialized path. Explain how you compute descendants and storage rollups.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Names tradeoffs and query patterns",
      "Handles moves/renames/deletes",
      "Provides incremental update strategy",
      "Covers recursive query costs"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-003",
    "title": "Design Shared Fact Tables and Conformed Dimensions",
    "category": "Data Modeling",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Propose fact tables and conformed dimensions for Dropbox analytics across users, teams, files, sharing, subscriptions, and experiments.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Star schema and dimensional modeling depth",
      "Fact grain for each table",
      "Conformed dimensions for user/team/date/plan",
      "Metric layer compatibility"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-004",
    "title": "Model Sharing Permissions",
    "category": "Data Modeling",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design tables for file/folder sharing, permissions, link sharing, team membership, and external collaborators. How do you answer who had access to file X at time T?\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Temporal access model",
      "Handles inherited permissions",
      "Explains audit facts vs current state",
      "Security and PII considerations"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-006",
    "title": "Experiment Assignment Model",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design tables for experiment assignments, exposures, metrics, guardrails, and segment breakdowns.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Assignment grain and stable bucketing",
      "Exposure vs assignment distinction",
      "Metric reproducibility",
      "Avoids contamination"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-007",
    "title": "Metric/Semantic Layer Design",
    "category": "Data Modeling",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design a certified metrics layer for DAU, MAU, paid conversion, storage used, sharing success, and retention.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Metric ownership and definitions",
      "Versioning/certification workflow",
      "Semantic layer tables or dbt metrics",
      "Guardrails and backfills"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-009",
    "title": "Handle Late Arriving Events",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "How would you design pipelines and models when mobile clients upload delayed events days later?\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Watermarks and grace periods",
      "Incremental merge windows",
      "Metric restatement policy",
      "Communication to consumers"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-010",
    "title": "Data Contracts for Upstream Producers",
    "category": "Data Modeling",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Define a data contract for product event producers. Include schema evolution, ownership, SLOs, validation, breaking changes, and CI gates.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Contract contents",
      "Shift-left validation",
      "Schema evolution policy",
      "Ownership and escalation"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-004",
    "title": "A/B Test New Sharing Flow",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design an A/B test for a redesigned sharing flow. Include hypothesis, unit, primary metric, guardrails, duration, and analysis risks.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Experiment unit choice",
      "Network effects",
      "Primary/guardrail metrics",
      "Statistical and practical significance"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-001",
    "title": "Define Dropbox North Star Metric",
    "category": "Product Metrics",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Propose a North Star metric for Dropbox and defend inputs, guardrails, and failure modes.\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Ties to user value",
      "Avoids vanity metrics",
      "Segmentation",
      "Guardrails"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-002",
    "title": "Measure File Sharing Success",
    "category": "Product Metrics",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Define metrics for successful file/folder sharing, including recipient activation and collaboration quality.\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Sender and recipient metrics",
      "Conversion funnel",
      "Quality/negative metrics",
      "Segmentation"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-003",
    "title": "Measure Sync Reliability",
    "category": "Product Metrics",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Define metrics to monitor file sync reliability and user pain.\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Success/failure rates",
      "Latency percentiles",
      "Data loss/duplicate risk",
      "Device/platform segmentation"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-006",
    "title": "Investigate DAU Drop",
    "category": "Product Metrics",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "DAU dropped 8% yesterday. Walk through diagnosis, data checks, segmentation, and executive communication.\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Checks data pipeline first",
      "Segments by platform/geo/product",
      "Hypothesis-driven analysis",
      "Clear comms with uncertainty"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-007",
    "title": "Retention Cohort Analysis",
    "category": "Product Metrics",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Explain how you compute and interpret weekly retention cohorts for Dropbox users and teams.\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Cohort definition",
      "Return event definition",
      "User vs team level",
      "Caveats"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-001",
    "title": "Top K Frequent Events",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "python",
    "prompt": "Implement top_k_events(events, k). Given a list of event names, return the k most frequent events ordered by descending frequency, then lexicographically ascending event name.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "def top_k_events(events, k):\n    # return list[str]\n    pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import top_k_events\nassert top_k_events(['upload','share','upload','open','share','upload'], 2) == ['upload','share']\nassert top_k_events(['b','a','b','c','a'], 2) == ['a','b']\nassert top_k_events([], 3) == []",
    "rubric": [],
    "tags": [
      "hash map",
      "sorting"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-002",
    "title": "Deduplicate Events by Latest Timestamp",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "python",
    "prompt": "Implement dedupe_latest(events). Each event is a dict with event_id, user_id, ts, payload. Keep only the latest record per event_id. If timestamps tie, keep the later item in input order. Return records ordered by event_id ascending.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "def dedupe_latest(events):\n    pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import dedupe_latest\ninp = [\n {'event_id':'e2','user_id':1,'ts':'2024-01-01T10:00:00','payload':'old'},\n {'event_id':'e1','user_id':2,'ts':'2024-01-01T09:00:00','payload':'x'},\n {'event_id':'e2','user_id':1,'ts':'2024-01-01T11:00:00','payload':'new'},\n]\nout = dedupe_latest(inp)\nassert [r['event_id'] for r in out] == ['e1','e2']\nassert out[1]['payload'] == 'new'\nassert dedupe_latest([]) == []",
    "rubric": [],
    "tags": [
      "dedupe",
      "timestamp"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-003",
    "title": "Sessionize User Events",
    "category": "Python",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "python",
    "prompt": "Implement sessionize(events, gap_minutes=30). Input events are dicts with user_id and ts ISO string. A new session starts when the gap from the previous event for that user is greater than gap_minutes. Return list of dicts: user_id, session_id, start_ts, end_ts, event_count ordered by user_id then start_ts.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "def sessionize(events, gap_minutes=30):\n    pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import sessionize\nevents = [\n {'user_id':1,'ts':'2024-01-01T09:00:00'}, {'user_id':1,'ts':'2024-01-01T09:20:00'},\n {'user_id':1,'ts':'2024-01-01T10:00:01'}, {'user_id':2,'ts':'2024-01-01T09:05:00'}]\nout = sessionize(events, 30)\nassert len(out) == 3\nassert out[0]['user_id'] == 1 and out[0]['event_count'] == 2\nassert out[1]['start_ts'] == '2024-01-01T10:00:01'\nassert out[2]['user_id'] == 2",
    "rubric": [],
    "tags": [
      "sessionization",
      "sorting"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-004",
    "title": "Memory-Efficient Log Aggregator",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "python",
    "prompt": "Implement aggregate_uploads(lines). Each line is 'user_id,file_size_mb'. Return a dict mapping int user_id to total uploaded MB. Ignore malformed lines and non-numeric sizes.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "def aggregate_uploads(lines):\n    pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import aggregate_uploads\nassert aggregate_uploads(['1,10','2,5','1,7','bad','3,nope']) == {1:17,2:5}\nassert aggregate_uploads([]) == {}",
    "rubric": [],
    "tags": [
      "streaming",
      "parsing"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-005",
    "title": "Schema Validation Gate",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "python",
    "prompt": "Implement validate_records(records, schema). Schema maps field name to Python type. Return a list of zero-based row indexes that fail due to missing fields or wrong types.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "def validate_records(records, schema):\n    pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import validate_records\nschema = {'user_id': int, 'event_type': str, 'size_mb': int}\nrecords = [{'user_id':1,'event_type':'upload','size_mb':10},{'user_id':'2','event_type':'upload','size_mb':10},{'user_id':3,'event_type':'share'}]\nassert validate_records(records, schema) == [1,2]\nassert validate_records([], schema) == []",
    "rubric": [],
    "tags": [
      "data quality",
      "validation"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-001",
    "title": "Power Users by Monthly Upload Volume",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "Dropbox stores file upload events. Return users whose total uploaded file size in June 2022 exceeds 1000 MB. Output user_id, user_name, total_mb ordered by total_mb descending.\n\nTables available:\n- users(user_id INTEGER, user_name TEXT, signup_date TEXT)\n- uploads(upload_id INTEGER, user_id INTEGER, upload_date TEXT, file_size_mb INTEGER)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "-- Return: user_id, user_name, total_mb\nSELECT ...;",
    "setup": "CREATE TABLE users(user_id INTEGER, user_name TEXT, signup_date TEXT);\nINSERT INTO users VALUES (101,'James','2019-04-21'),(102,'Emma','2020-01-19'),(103,'Olivia','2021-03-05'),(104,'John','2019-08-15');\nCREATE TABLE uploads(upload_id INTEGER, user_id INTEGER, upload_date TEXT, file_size_mb INTEGER);\nINSERT INTO uploads VALUES\n(201,101,'2022-06-10',350),(202,101,'2022-06-12',120),(203,102,'2022-06-14',500),(204,103,'2022-06-16',150),\n(205,101,'2022-06-18',620),(206,102,'2022-06-20',700),(207,104,'2022-07-01',2000);",
    "expected": [
      {
        "user_id": 102,
        "user_name": "Emma",
        "total_mb": 1200
      },
      {
        "user_id": 101,
        "user_name": "James",
        "total_mb": 1090
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "aggregation",
      "date filtering"
    ],
    "day": "Day 1",
    "source": "Inspired by public Dropbox SQL practice themes"
  },
  {
    "id": "DBX-SQL-002",
    "title": "Monthly Average Product Rating",
    "category": "SQL",
    "difficulty": "Easy",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "For each product and month, compute the average user rating. Output mth in YYYY-MM format, product_id, avg_stars rounded to 2 decimals. Order by mth, product_id.\n\nTables available:\n- reviews(review_id INTEGER, user_id INTEGER, submit_date TEXT, product_id INTEGER, stars INTEGER)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE reviews(review_id INTEGER, user_id INTEGER, submit_date TEXT, product_id INTEGER, stars INTEGER);\nINSERT INTO reviews VALUES\n(6171,123,'2022-06-08',50001,4),(7802,265,'2022-06-10',69852,4),(5293,362,'2022-06-18',50001,3),\n(6352,192,'2022-07-26',69852,3),(4517,981,'2022-07-05',69852,2),(7831,555,'2022-07-14',50001,5);",
    "expected": [
      {
        "mth": "2022-06",
        "product_id": 50001,
        "avg_stars": 3.5
      },
      {
        "mth": "2022-06",
        "product_id": 69852,
        "avg_stars": 4.0
      },
      {
        "mth": "2022-07",
        "product_id": 50001,
        "avg_stars": 5.0
      },
      {
        "mth": "2022-07",
        "product_id": 69852,
        "avg_stars": 2.5
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "group by",
      "date"
    ],
    "day": "Day 1",
    "source": "Inspired by public Dropbox SQL practice themes"
  },
  {
    "id": "DBX-SQL-003",
    "title": "Most Active File Sharer",
    "category": "SQL",
    "difficulty": "Easy",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "Return the email of the user who shared the most files and the number of files shared. If tied, return the lexicographically smaller email.\n\nTables available:\n- users(user_id INTEGER, email TEXT, date_joined TEXT)\n- sharing(activity_id INTEGER, sender_id INTEGER, receiver_id INTEGER, file_id INTEGER, file_size REAL, date_shared TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE users(user_id INTEGER, email TEXT, date_joined TEXT);\nINSERT INTO users VALUES (1,'john@gmail.com','2015-04-03'),(2,'sarah@yahoo.com','2017-10-21'),(3,'emma@hotmail.com','2020-09-12');\nCREATE TABLE sharing(activity_id INTEGER, sender_id INTEGER, receiver_id INTEGER, file_id INTEGER, file_size REAL, date_shared TEXT);\nINSERT INTO sharing VALUES\n(101,1,2,5001,13.5,'2021-08-30'),(102,1,3,5002,30.2,'2021-09-05'),(103,2,1,5003,7.8,'2021-09-12'),\n(104,1,2,5004,16.7,'2021-09-15'),(105,2,3,5005,8.0,'2021-09-16');",
    "expected": [
      {
        "email": "john@gmail.com",
        "files_shared": 3
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "joins",
      "ranking"
    ],
    "day": "Day 1",
    "source": "Inspired by public Dropbox SQL practice themes"
  },
  {
    "id": "DBX-SQL-004",
    "title": "Daily Active Users and Stickiness",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "For January 2024, compute DAU by day and the month-level MAU. Output activity_date, dau, mau, stickiness where stickiness = dau / mau rounded to 3 decimals. Count distinct active users.\n\nTables available:\n- events(user_id INTEGER, event_time TEXT, event_type TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE events(user_id INTEGER, event_time TEXT, event_type TEXT);\nINSERT INTO events VALUES\n(1,'2024-01-01 09:00','open'),(2,'2024-01-01 10:00','upload'),(1,'2024-01-01 11:00','share'),\n(2,'2024-01-02 09:00','open'),(3,'2024-01-02 10:00','upload'),(4,'2024-01-03 13:00','open'),\n(1,'2024-01-03 14:00','open'),(4,'2024-02-01 10:00','open');",
    "expected": [
      {
        "activity_date": "2024-01-01",
        "dau": 2,
        "mau": 4,
        "stickiness": 0.5
      },
      {
        "activity_date": "2024-01-02",
        "dau": 2,
        "mau": 4,
        "stickiness": 0.5
      },
      {
        "activity_date": "2024-01-03",
        "dau": 2,
        "mau": 4,
        "stickiness": 0.5
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "metrics",
      "distinct counts"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-005",
    "title": "Rolling 7-Day Active Users",
    "category": "SQL",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "For each calendar day in the events table, return the number of distinct users active in the trailing 7-day window ending that day. Output activity_date, rolling_7d_users ordered by date.\n\nTables available:\n- events(user_id INTEGER, event_time TEXT, event_type TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "WITH days AS (...)\nSELECT ...;",
    "setup": "CREATE TABLE events(user_id INTEGER, event_time TEXT, event_type TEXT);\nINSERT INTO events VALUES\n(1,'2024-01-01 09:00','open'),(2,'2024-01-01 10:00','upload'),(3,'2024-01-02 10:00','upload'),\n(1,'2024-01-05 09:00','share'),(4,'2024-01-07 11:00','open'),(5,'2024-01-08 11:00','open'),(2,'2024-01-09 12:00','open');",
    "expected": [
      {
        "activity_date": "2024-01-01",
        "rolling_7d_users": 2
      },
      {
        "activity_date": "2024-01-02",
        "rolling_7d_users": 3
      },
      {
        "activity_date": "2024-01-05",
        "rolling_7d_users": 3
      },
      {
        "activity_date": "2024-01-07",
        "rolling_7d_users": 4
      },
      {
        "activity_date": "2024-01-08",
        "rolling_7d_users": 5
      },
      {
        "activity_date": "2024-01-09",
        "rolling_7d_users": 5
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "rolling window",
      "distinct"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-006",
    "title": "Signup to First Upload Conversion",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "For users who signed up in January 2024, compute the percentage who uploaded at least one file within 7 days of signup. Output conversion_rate rounded to 3 decimals.\n\nTables available:\n- users(user_id INTEGER, signup_date TEXT)\n- uploads(user_id INTEGER, upload_time TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": ",\nSELECT ...;",
    "setup": "CREATE TABLE users(user_id INTEGER, signup_date TEXT);\nINSERT INTO users VALUES (1,'2024-01-01'),(2,'2024-01-05'),(3,'2024-01-10'),(4,'2024-02-01');\nCREATE TABLE uploads(user_id INTEGER, upload_time TEXT);\nINSERT INTO uploads VALUES (1,'2024-01-03 10:00'),(2,'2024-01-20 10:00'),(3,'2024-01-12 10:00'),(4,'2024-02-02 10:00');",
    "expected": [
      {
        "conversion_rate": 0.667
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "conversion funnel",
      "left joins"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-007",
    "title": "First Paid Conversion Event",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "For each user, return the first time they converted to a paid plan. Output user_id and first_paid_at. Users without paid conversion should be excluded.\n\nTables available:\n- subscription_events(user_id INTEGER, event_time TEXT, event_type TEXT, plan TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE subscription_events(user_id INTEGER, event_time TEXT, event_type TEXT, plan TEXT);\nINSERT INTO subscription_events VALUES\n(1,'2024-01-01','trial_started','trial'),(1,'2024-01-10','plan_changed','plus'),(1,'2024-02-01','plan_changed','pro'),\n(2,'2024-01-05','trial_started','trial'),(3,'2024-01-03','plan_changed','plus');",
    "expected": [
      {
        "user_id": 1,
        "first_paid_at": "2024-01-10"
      },
      {
        "user_id": 3,
        "first_paid_at": "2024-01-03"
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "min",
      "paid conversion"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-008",
    "title": "Duplicate File Uploads by Hash",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "Detect duplicate file uploads by the same user. Two uploads are duplicates when they share the same user_id and content_hash but have different file_id values. Output user_id, content_hash, duplicate_files ordered by user_id, content_hash.\n\nTables available:\n- files(file_id INTEGER, user_id INTEGER, content_hash TEXT, uploaded_at TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE files(file_id INTEGER, user_id INTEGER, content_hash TEXT, uploaded_at TEXT);\nINSERT INTO files VALUES\n(10,1,'aaa','2024-01-01'),(11,1,'aaa','2024-01-02'),(12,1,'bbb','2024-01-02'),(13,2,'aaa','2024-01-03'),\n(14,2,'aaa','2024-01-04'),(15,2,'aaa','2024-01-05'),(16,3,'ccc','2024-01-05');",
    "expected": [
      {
        "user_id": 1,
        "content_hash": "aaa",
        "duplicate_files": 2
      },
      {
        "user_id": 2,
        "content_hash": "aaa",
        "duplicate_files": 3
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "dedupe",
      "hash"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-009",
    "title": "Storage Growth by Team",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "Compute month-over-month storage growth for each team. Output team_id, mth, storage_gb, prev_storage_gb, growth_gb. Exclude first month per team.\n\nTables available:\n- team_storage(team_id INTEGER, snapshot_date TEXT, storage_gb INTEGER)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE team_storage(team_id INTEGER, snapshot_date TEXT, storage_gb INTEGER);\nINSERT INTO team_storage VALUES\n(10,'2024-01-31',100),(10,'2024-02-29',140),(10,'2024-03-31',135),(20,'2024-01-31',50),(20,'2024-02-29',80);",
    "expected": [
      {
        "team_id": 10,
        "mth": "2024-02",
        "storage_gb": 140,
        "prev_storage_gb": 100,
        "growth_gb": 40
      },
      {
        "team_id": 10,
        "mth": "2024-03",
        "storage_gb": 135,
        "prev_storage_gb": 140,
        "growth_gb": -5
      },
      {
        "team_id": 20,
        "mth": "2024-02",
        "storage_gb": 80,
        "prev_storage_gb": 50,
        "growth_gb": 30
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "lag",
      "growth"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-010",
    "title": "Team Invite Acceptance Funnel",
    "category": "SQL",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "A team invite is successful if an invite_sent event is followed by invite_accepted for the same invite_id within 7 days. Compute acceptance_rate rounded to 3 decimals.\n\nTables available:\n- invite_events(invite_id INTEGER, team_id INTEGER, user_email TEXT, event_type TEXT, event_time TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE invite_events(invite_id INTEGER, team_id INTEGER, user_email TEXT, event_type TEXT, event_time TEXT);\nINSERT INTO invite_events VALUES\n(1,10,'a@x.com','invite_sent','2024-01-01'),(1,10,'a@x.com','invite_accepted','2024-01-03'),\n(2,10,'b@x.com','invite_sent','2024-01-01'),(2,10,'b@x.com','invite_accepted','2024-01-20'),\n(3,20,'c@x.com','invite_sent','2024-01-05'),(4,20,'d@x.com','invite_sent','2024-01-06'),(4,20,'d@x.com','invite_accepted','2024-01-10');",
    "expected": [
      {
        "acceptance_rate": 0.5
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "funnel",
      "time window"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-013",
    "title": "Experiment Guardrail Metrics",
    "category": "SQL",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "sql",
    "prompt": "Users are assigned to control or treatment. Compute conversion_rate and avg_storage_mb by variant. Conversion means at least one upgrade event. Output variant, users, conversion_rate, avg_storage_mb ordered by variant.\n\nTables available:\n- assignments(user_id INTEGER, variant TEXT)\n- events(user_id INTEGER, event_type TEXT)\n- storage(user_id INTEGER, storage_mb INTEGER)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE assignments(user_id INTEGER, variant TEXT);\nINSERT INTO assignments VALUES (1,'control'),(2,'control'),(3,'treatment'),(4,'treatment'),(5,'treatment');\nCREATE TABLE events(user_id INTEGER, event_type TEXT);\nINSERT INTO events VALUES (1,'upgrade'),(1,'upload'),(2,'upload'),(3,'upgrade'),(4,'upgrade'),(5,'upload');\nCREATE TABLE storage(user_id INTEGER, storage_mb INTEGER);\nINSERT INTO storage VALUES (1,1000),(2,500),(3,1200),(4,800),(5,400);",
    "expected": [
      {
        "variant": "control",
        "users": 2,
        "conversion_rate": 0.5,
        "avg_storage_mb": 750.0
      },
      {
        "variant": "treatment",
        "users": 3,
        "conversion_rate": 0.667,
        "avg_storage_mb": 800.0
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "experimentation",
      "guardrails"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SPK-001",
    "title": "Optimize a Skewed Spark Join",
    "category": "Spark/Databricks",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "A Spark job joining events to users is slow due to skewed enterprise accounts. Diagnose and fix it.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Identifies skew symptoms",
      "Salting or broadcast strategy",
      "Partition tuning",
      "Measurement plan"
    ],
    "tags": [],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SPK-002",
    "title": "Spark SQL Performance Optimization",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Explain how you optimize Spark SQL queries over large Dropbox event tables.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Predicate pushdown",
      "Partition pruning",
      "Broadcast joins",
      "File size/compaction"
    ],
    "tags": [],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-001",
    "title": "Design Dropbox Analytics Platform",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design the analytics platform that turns product events into trusted executive dashboards and self-service datasets.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Ingestion, storage, transformation, serving",
      "Batch and streaming tradeoffs",
      "Governance and observability",
      "Cost and reliability strategy"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-002",
    "title": "Design a Real-Time DAU Dashboard",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design a pipeline for near-real-time DAU, uploads, shares, and sync errors with <5 minute freshness.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Event ingestion path",
      "Approximate vs exact distinct counts",
      "State management and late events",
      "Monitoring and fallback"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-003",
    "title": "Design a Data Quality Framework",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design a framework to catch freshness, volume, schema, null, referential integrity, and metric drift issues before production dashboards break.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Check taxonomy",
      "CI/CD integration",
      "Alert routing and severity",
      "Quarantine and rollback"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-004",
    "title": "Modernize Airflow Orchestration",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Dropbox wants to modernize orchestration and reduce on-call burden. Redesign DAG patterns, dependency management, retries, alerts, and runbooks.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Pipeline decomposition",
      "Idempotency and retries",
      "SLA/freshness design",
      "On-call sustainable operations"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-005",
    "title": "Design a Backfill System",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P0",
    "runtime": "rubric",
    "prompt": "Design safe backfills for petabyte-scale tables and certified metrics without disrupting production consumers.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Backfill isolation",
      "Compute/cost controls",
      "Validation and reconciliation",
      "Cutover and rollback"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-AIR-002",
    "title": "Dynamic DAG Generation Tradeoffs",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "When would you use dynamic DAG generation? How do you avoid scheduler overload and invisible dependencies?\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Appropriate use cases",
      "Config validation",
      "Scheduler performance",
      "Observability"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-AIR-005",
    "title": "Airflow Sensors vs Event-Driven Scheduling",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Compare sensors, deferrable operators, dataset scheduling, and event-driven orchestration for Dropbox pipelines.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Tradeoffs",
      "Resource impact",
      "Freshness and dependency semantics",
      "Operational simplicity"
    ],
    "tags": [],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-051",
    "title": "Explain how to make an Airflow task idempotent.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Explain how to make an Airflow task idempotent.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-052",
    "title": "Design a DAG dependency strategy across domain pipelines.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a DAG dependency strategy across domain pipelines.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-054",
    "title": "Explain how you handle Airflow backfills safely.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Explain how you handle Airflow backfills safely.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-055",
    "title": "Design dev/test/prod promotion for dbt models.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design dev/test/prod promotion for dbt models.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-057",
    "title": "Write a runbook template for failed metrics pipelines.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Write a runbook template for failed metrics pipelines.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-058",
    "title": "Explain how to separate orchestration from transformation logic.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Explain how to separate orchestration from transformation logic.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-060",
    "title": "Evaluate Airflow vs managed workflow alternatives.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Evaluate Airflow vs managed workflow alternatives.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-BEH-005",
    "title": "Mentoring and Raising the Bar",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about mentoring engineers or analysts and raising quality standards.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Coaching approach",
      "Artifacts/templates",
      "Measurable improvement",
      "Long-term effect"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-BEH-006",
    "title": "Disagreement With Product",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about disagreeing with a product or data science partner on metric definition or pipeline design.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Constructive conflict",
      "Evidence",
      "Resolution",
      "Relationship preservation"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-072",
    "title": "Tell me about killing a beloved but low-value project.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about killing a beloved but low-value project.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-073",
    "title": "Tell me about dealing with a difficult on-call rotation.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about dealing with a difficult on-call rotation.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-075",
    "title": "Tell me about pushing back on unrealistic deadlines.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about pushing back on unrealistic deadlines.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-076",
    "title": "Tell me about making a system simpler.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about making a system simpler.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-078",
    "title": "Tell me about partnering with BI or finance teams.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about partnering with BI or finance teams.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-079",
    "title": "Tell me about driving adoption of a new platform.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tell me about driving adoption of a new platform.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-005",
    "title": "Subscription and Billing Data Model",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a model for plans, invoices, trials, upgrades, downgrades, cancellations, refunds, and revenue recognition.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Separates events from snapshots",
      "Handles plan changes and refunds",
      "Defines MRR/ARR metrics",
      "Late arriving billing events"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-DM-008",
    "title": "Medallion Architecture for Event Data",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design bronze/silver/gold layers for raw events, cleaned events, and analytics marts.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Layer contracts",
      "Quality gates between layers",
      "Idempotent incremental loads",
      "Backfill strategy"
    ],
    "tags": [],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-021",
    "title": "Design a current-state snapshot and event-sourced model for file metadata.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a current-state snapshot and event-sourced model for file metadata.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-022",
    "title": "Model team membership with historical seat changes.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Model team membership with historical seat changes.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-024",
    "title": "Design aggregate tables for executive WBR dashboards.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design aggregate tables for executive WBR dashboards.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-025",
    "title": "Design a bridge table for many-to-many file labels.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a bridge table for many-to-many file labels.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-027",
    "title": "Design a feature adoption mart for product analytics.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a feature adoption mart for product analytics.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-028",
    "title": "Design certified dimensions for geography, plan, platform, and product surface.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design certified dimensions for geography, plan, platform, and product surface.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-030",
    "title": "Choose partitioning and clustering for a 10TB/day event table.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Choose partitioning and clustering for a 10TB/day event table.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-061",
    "title": "Explain sample ratio mismatch and how to detect it.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Explain sample ratio mismatch and how to detect it.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-063",
    "title": "Discuss network interference in collaboration products.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Discuss network interference in collaboration products.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-064",
    "title": "Choose user-level vs team-level randomization.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Choose user-level vs team-level randomization.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-066",
    "title": "Analyze a statistically significant but practically tiny result.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Analyze a statistically significant but practically tiny result.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-067",
    "title": "Handle sequential peeking in experiment analysis.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Handle sequential peeking in experiment analysis.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-069",
    "title": "Explain CUPED or variance reduction conceptually.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Explain CUPED or variance reduction conceptually.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-070",
    "title": "Debug a treatment group with lower telemetry volume.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Debug a treatment group with lower telemetry volume.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-005",
    "title": "Measure Dropbox Dash Adoption",
    "category": "Product Metrics",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Define activation, engagement, retention, and quality metrics for an AI-powered search/knowledge product.\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Activation event",
      "Query success and latency",
      "Retention and repeat use",
      "Trust/safety guardrails"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-MET-008",
    "title": "Metric Definition Conflict",
    "category": "Product Metrics",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Product and Finance disagree on active paid team definition. How do you resolve and operationalize the final metric?\n\nAnswer structure: define the metric, numerator/denominator, dimensions, caveats, guardrails, and how you would operationalize it.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Stakeholder alignment",
      "Definition/versioning",
      "Backtesting impact",
      "Certification"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-006",
    "title": "LRU Cache for Metadata",
    "category": "Python",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "python",
    "prompt": "Implement an LRUCache with get(key) and put(key, value). get returns -1 when missing. Both operations should be O(1).\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "class LRUCache:\n    def __init__(self, capacity):\n        pass\n    def get(self, key):\n        pass\n    def put(self, key, value):\n        pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import LRUCache\nc = LRUCache(2)\nc.put('a',1); c.put('b',2)\nassert c.get('a') == 1\nc.put('c',3)\nassert c.get('b') == -1\nc.put('d',4)\nassert c.get('a') == -1\nassert c.get('c') == 3 and c.get('d') == 4",
    "rubric": [],
    "tags": [
      "data structures",
      "cache"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-007",
    "title": "Rate Limiter",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "python",
    "prompt": "Implement allow_request(user_id, timestamp_seconds, limit, window_seconds). Maintain state so each user can make at most limit requests within the trailing window_seconds. Return True if allowed, False otherwise.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "class RateLimiter:\n    def __init__(self, limit, window_seconds):\n        pass\n    def allow_request(self, user_id, timestamp_seconds):\n        pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import RateLimiter\nrl = RateLimiter(2, 10)\nassert rl.allow_request('u1', 0) is True\nassert rl.allow_request('u1', 5) is True\nassert rl.allow_request('u1', 9) is False\nassert rl.allow_request('u1', 11) is True\nassert rl.allow_request('u2', 9) is True",
    "rubric": [],
    "tags": [
      "sliding window",
      "systems coding"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-PY-008",
    "title": "Reconcile Source and Warehouse Counts",
    "category": "Python",
    "difficulty": "Easy",
    "priority": "P1",
    "runtime": "python",
    "prompt": "Implement reconcile(source_counts, warehouse_counts, tolerance=0). Return a sorted list of table names whose absolute count difference exceeds tolerance. Missing tables count as 0.\n\nExample/tests are shown below and are run by the app. Define only the requested function/class unless helper functions are useful.",
    "starter": "def reconcile(source_counts, warehouse_counts, tolerance=0):\n    pass",
    "setup": "",
    "expected": [],
    "testCode": "from __main__ import reconcile\nassert reconcile({'a':100,'b':50},{'a':100,'b':45}, tolerance=2) == ['b']\nassert reconcile({'a':10},{'a':11,'c':1}, tolerance=0) == ['a','c']",
    "rubric": [],
    "tags": [
      "data quality",
      "reconciliation"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-012",
    "title": "Merge overlapping file activity intervals.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Merge overlapping file activity intervals.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-013",
    "title": "Build a trie for path prefix lookup.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Build a trie for path prefix lookup.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-015",
    "title": "Parse JSON logs and emit bad-record samples.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Parse JSON logs and emit bad-record samples.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-016",
    "title": "Build a rolling percentile approximation interface.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Build a rolling percentile approximation interface.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-018",
    "title": "Implement reservoir sampling for log lines.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Implement reservoir sampling for log lines.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-019",
    "title": "Compare two nested schemas and report breaking changes.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Compare two nested schemas and report breaking changes.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSQL-001",
    "title": "Users with 7 Consecutive Active Days",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Find users who had at least one streak of 7 consecutive active calendar days. A user is considered active on a date if they have at least one row in user_activity for that date. Output user_id ordered ascending.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH dedup AS (\n  SELECT DISTINCT user_id, activity_date\n  FROM user_activity\n), numbered AS (\n  SELECT\n    user_id,\n    activity_date,\n    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY activity_date) AS rn\n  FROM dedup\n)\nSELECT ...;",
    "setup": "CREATE TABLE user_activity(user_id INTEGER, activity_date TEXT);\nINSERT INTO user_activity VALUES\n(1,'2024-01-01'),(1,'2024-01-02'),(1,'2024-01-03'),(1,'2024-01-04'),(1,'2024-01-05'),(1,'2024-01-06'),(1,'2024-01-07'),\n(2,'2024-01-01'),(2,'2024-01-02'),(2,'2024-01-04'),(2,'2024-01-05'),(2,'2024-01-06'),(2,'2024-01-07'),(2,'2024-01-08'),\n(3,'2024-02-10'),(3,'2024-02-11'),(3,'2024-02-12'),(3,'2024-02-13'),(3,'2024-02-14'),(3,'2024-02-15'),(3,'2024-02-16'),(3,'2024-02-17'),\n(4,'2024-03-01'),(4,'2024-03-03');",
    "expected": [
      {
        "user_id": 1
      },
      {
        "user_id": 3
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "gap and island",
      "streaks",
      "window functions"
    ],
    "day": "Day 3",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-003",
    "title": "Files Above the 95th Percentile per Team",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Return files whose size is above the 95th percentile per team. For this SQLite exercise, define \"above the 95th percentile\" as rows where CUME_DIST() over file_size_mb ascending is greater than 0.95 within the team. Output team_id, file_id, file_size_mb ordered by team_id, file_id.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH ranked AS (\n  SELECT\n    team_id,\n    file_id,\n    file_size_mb,\n    CUME_DIST() OVER (PARTITION BY team_id ORDER BY file_size_mb) AS cd\n  FROM files\n)\nSELECT ...;",
    "setup": "CREATE TABLE files(file_id INTEGER, team_id INTEGER, file_size_mb REAL);\nINSERT INTO files VALUES\n(101,1,10.0),(102,1,20.0),(103,1,30.0),(104,1,40.0),(105,1,500.0),\n(201,2,5.0),(202,2,6.0),(203,2,7.0),(204,2,8.0),(205,2,100.0);",
    "expected": [
      {
        "team_id": 1,
        "file_id": 105,
        "file_size_mb": 500.0
      },
      {
        "team_id": 2,
        "file_id": 205,
        "file_size_mb": 100.0
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "percentiles",
      "window functions"
    ],
    "day": "Day 5",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-004",
    "title": "Second Most Recent Upload per User",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Find the second most recent upload per user. Users with fewer than two uploads should be excluded. Output user_id, file_id, uploaded_at ordered by user_id.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH ranked AS (\n  SELECT\n    user_id,\n    file_id,\n    uploaded_at,\n    ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY uploaded_at DESC, file_id DESC) AS rn\n  FROM uploads\n)\nSELECT ...;",
    "setup": "CREATE TABLE uploads(user_id INTEGER, file_id INTEGER, uploaded_at TEXT);\nINSERT INTO uploads VALUES\n(1,1001,'2024-01-01 09:00'),(1,1002,'2024-01-03 09:00'),(1,1003,'2024-01-05 09:00'),\n(2,2001,'2024-01-02 10:00'),\n(3,3001,'2024-02-01 12:00'),(3,3002,'2024-02-03 12:00');",
    "expected": [
      {
        "user_id": 1,
        "file_id": 1002,
        "uploaded_at": "2024-01-03 09:00"
      },
      {
        "user_id": 3,
        "file_id": 3001,
        "uploaded_at": "2024-02-01 12:00"
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "ranking",
      "window functions"
    ],
    "day": "Day 6",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-006",
    "title": "Detect Schema Drift from Event Payload Key Counts",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Detect payload keys for upload events whose presence rate changed by at least 0.40 between 2024-01-01 and 2024-01-02. Presence rate = key_present_count / event_count. Output payload_key, previous_rate, current_rate, absolute_change ordered by payload_key. Round rates and absolute_change to 2 decimal places.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH rates AS (\n  SELECT\n    event_date,\n    payload_key,\n    ROUND(1.0 * key_present_count / event_count, 2) AS presence_rate\n  FROM payload_key_counts\n  WHERE event_type = 'upload'\n)\nSELECT ...;",
    "setup": "CREATE TABLE payload_key_counts(event_date TEXT, event_type TEXT, payload_key TEXT, event_count INTEGER, key_present_count INTEGER);\nINSERT INTO payload_key_counts VALUES\n('2024-01-01','upload','content_hash',100,100),('2024-01-02','upload','content_hash',100,55),\n('2024-01-01','upload','file_size',100,100),('2024-01-02','upload','file_size',100,100),\n('2024-01-01','upload','mime_type',100,0),('2024-01-02','upload','mime_type',100,80),\n('2024-01-01','share','recipient_id',50,50),('2024-01-02','share','recipient_id',50,49);",
    "expected": [
      {
        "payload_key": "content_hash",
        "previous_rate": 1.0,
        "current_rate": 0.55,
        "absolute_change": 0.45
      },
      {
        "payload_key": "mime_type",
        "previous_rate": 0.0,
        "current_rate": 0.8,
        "absolute_change": 0.8
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "data quality",
      "schema drift"
    ],
    "day": "Day 1",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-007",
    "title": "Net New Paid Teams by Month",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Build a query for net new paid teams by month. paid_started adds one paid team and paid_canceled removes one paid team. Output mth, paid_starts, paid_cancellations, net_new_paid ordered by mth.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "SELECT\n  substr(event_time, 1, 7) AS mth,\n  ...\nFROM team_subscription_events\nGROUP BY substr(event_time, 1, 7)\nORDER BY mth;",
    "setup": "CREATE TABLE team_subscription_events(team_id INTEGER, event_time TEXT, event_type TEXT);\nINSERT INTO team_subscription_events VALUES\n(1,'2024-01-05','paid_started'),(2,'2024-01-07','paid_started'),\n(3,'2024-02-01','paid_started'),(2,'2024-02-10','paid_canceled'),\n(4,'2024-03-15','paid_started'),(1,'2024-03-20','paid_canceled'),(5,'2024-03-22','paid_started');",
    "expected": [
      {
        "mth": "2024-01",
        "paid_starts": 2,
        "paid_cancellations": 0,
        "net_new_paid": 2
      },
      {
        "mth": "2024-02",
        "paid_starts": 1,
        "paid_cancellations": 1,
        "net_new_paid": 0
      },
      {
        "mth": "2024-03",
        "paid_starts": 2,
        "paid_cancellations": 1,
        "net_new_paid": 1
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "subscriptions",
      "aggregation"
    ],
    "day": "Day 2",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-009",
    "title": "Median Upload Size per Platform",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Compute the exact median upload size per platform. For an even number of uploads on a platform, use the average of the two middle values. Output platform, median_upload_mb ordered by platform. Round median_upload_mb to 1 decimal place.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH ranked AS (\n  SELECT\n    platform,\n    upload_size_mb,\n    ROW_NUMBER() OVER (PARTITION BY platform ORDER BY upload_size_mb) AS rn,\n    COUNT(*) OVER (PARTITION BY platform) AS cnt\n  FROM uploads\n)\nSELECT ...;",
    "setup": "CREATE TABLE uploads(upload_id INTEGER, platform TEXT, upload_size_mb REAL);\nINSERT INTO uploads VALUES\n(1,'desktop',10.0),(2,'desktop',20.0),(3,'desktop',30.0),(4,'desktop',40.0),\n(5,'mobile',5.0),(6,'mobile',7.0),(7,'mobile',100.0),\n(8,'web',12.0),(9,'web',18.0);",
    "expected": [
      {
        "platform": "desktop",
        "median_upload_mb": 25.0
      },
      {
        "platform": "mobile",
        "median_upload_mb": 7.0
      },
      {
        "platform": "web",
        "median_upload_mb": 15.0
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "median",
      "window functions"
    ],
    "day": "Day 4",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-010",
    "title": "Teams with Three Consecutive Monthly Seat Declines",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Identify teams with three consecutive month-over-month declines in active seats. This requires four consecutive monthly rows where month2 < month1, month3 < month2, and month4 < month3. Output team_id ordered ascending.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH sequenced AS (\n  SELECT\n    team_id,\n    mth,\n    active_seats,\n    LAG(active_seats, 1) OVER (PARTITION BY team_id ORDER BY mth) AS seats_m1,\n    LAG(active_seats, 2) OVER (PARTITION BY team_id ORDER BY mth) AS seats_m2,\n    LAG(active_seats, 3) OVER (PARTITION BY team_id ORDER BY mth) AS seats_m3\n  FROM team_seat_metrics\n)\nSELECT ...;",
    "setup": "CREATE TABLE team_seat_metrics(team_id INTEGER, mth TEXT, active_seats INTEGER);\nINSERT INTO team_seat_metrics VALUES\n(1,'2024-01',100),(1,'2024-02',90),(1,'2024-03',80),(1,'2024-04',70),\n(2,'2024-01',50),(2,'2024-02',55),(2,'2024-03',54),(2,'2024-04',53),\n(3,'2024-01',200),(3,'2024-02',190),(3,'2024-03',195),(3,'2024-04',180);",
    "expected": [
      {
        "team_id": 1
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "lag",
      "trend detection"
    ],
    "day": "Day 5",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-SQL-011",
    "title": "Latest Metadata Record per File",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Return the latest metadata record for each file_id using updated_at. If tied, choose the largest version. Output file_id, owner_user_id, folder_id, version, updated_at ordered by file_id.\n\nTables available:\n- file_metadata(file_id INTEGER, owner_user_id INTEGER, folder_id INTEGER, version INTEGER, updated_at TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE file_metadata(file_id INTEGER, owner_user_id INTEGER, folder_id INTEGER, version INTEGER, updated_at TEXT);\nINSERT INTO file_metadata VALUES\n(1,101,10,1,'2024-01-01'),(1,101,11,2,'2024-01-03'),(2,102,20,1,'2024-01-02'),(2,102,21,2,'2024-01-02'),(3,103,30,1,'2024-01-05');",
    "expected": [
      {
        "file_id": 1,
        "owner_user_id": 101,
        "folder_id": 11,
        "version": 2,
        "updated_at": "2024-01-03"
      },
      {
        "file_id": 2,
        "owner_user_id": 102,
        "folder_id": 21,
        "version": 2,
        "updated_at": "2024-01-02"
      },
      {
        "file_id": 3,
        "owner_user_id": 103,
        "folder_id": 30,
        "version": 1,
        "updated_at": "2024-01-05"
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "row_number",
      "latest record"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-012",
    "title": "Churned Users",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Assume today is 2024-02-01. Return users who were active before 2024-01-02 but had no activity in the trailing 30 days [2024-01-02, 2024-02-01). Output user_id ordered ascending.\n\nTables available:\n- events(user_id INTEGER, event_time TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE events(user_id INTEGER, event_time TEXT);\nINSERT INTO events VALUES (1,'2023-12-01'),(1,'2024-01-10'),(2,'2023-12-15'),(3,'2023-11-20'),(4,'2024-01-15');",
    "expected": [
      {
        "user_id": 2
      },
      {
        "user_id": 3
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "anti join",
      "churn"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-014",
    "title": "Data Quality Freshness Breach",
    "category": "SQL",
    "difficulty": "Easy",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "Assume current_time is 2024-01-10 12:00:00. Return pipelines whose last_success_time is more than 24 hours old. Output pipeline_name and hours_since_success rounded to 1 decimal.\n\nTables available:\n- pipeline_runs(pipeline_name TEXT, last_success_time TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE pipeline_runs(pipeline_name TEXT, last_success_time TEXT);\nINSERT INTO pipeline_runs VALUES ('uploads_daily','2024-01-10 02:00:00'),('billing_daily','2024-01-08 11:00:00'),('metrics_hourly','2024-01-10 11:00:00');",
    "expected": [
      {
        "pipeline_name": "billing_daily",
        "hours_since_success": 49.0
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "data quality",
      "freshness"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SQL-015",
    "title": "Top Folder by Share Count per Team",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "sql",
    "prompt": "For each team, find the folder with the highest number of share events. Output team_id, folder_id, share_count. Break ties by smaller folder_id.\n\nTables available:\n- share_events(team_id INTEGER, folder_id INTEGER, shared_at TEXT)\n\nUse SQLite-compatible SQL. Return exactly the requested columns in the requested order.",
    "starter": "SELECT ...;",
    "setup": "CREATE TABLE share_events(team_id INTEGER, folder_id INTEGER, shared_at TEXT);\nINSERT INTO share_events VALUES (1,10,'2024-01-01'),(1,10,'2024-01-02'),(1,20,'2024-01-03'),(2,30,'2024-01-01'),(2,40,'2024-01-02'),(2,40,'2024-01-03');",
    "expected": [
      {
        "team_id": 1,
        "folder_id": 10,
        "share_count": 2
      },
      {
        "team_id": 2,
        "folder_id": 40,
        "share_count": 2
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "rank",
      "product analytics"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-042",
    "title": "Diagnose a job with too many small files.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Diagnose a job with too many small files.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-043",
    "title": "Compare repartition and coalesce in a backfill.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Compare repartition and coalesce in a backfill.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-045",
    "title": "Tune Spark memory for a heavy aggregation.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Tune Spark memory for a heavy aggregation.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-046",
    "title": "Design Z-order/clustering strategy for file events.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design Z-order/clustering strategy for file events.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-048",
    "title": "Handle schema evolution in streaming sources.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Handle schema evolution in streaming sources.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-049",
    "title": "Compare Spark SQL and dbt SQL for transformations.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Compare Spark SQL and dbt SQL for transformations.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SPK-003",
    "title": "Delta Lake Incremental Merge",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design an incremental Delta Lake merge for late-arriving file metadata updates.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Merge keys",
      "Watermark window",
      "Small file management",
      "Schema evolution"
    ],
    "tags": [],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SPK-004",
    "title": "Unity Catalog Governance",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "How would you use Unity Catalog or equivalent governance for secure analytics development?\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Access control",
      "Lineage",
      "PII tagging",
      "Dev/test/prod separation"
    ],
    "tags": [],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SPK-005",
    "title": "Structured Streaming Checkpointing",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Explain checkpointing, output modes, and recovery for streaming upload metrics.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Checkpoint purpose",
      "Stateful aggregation",
      "Exactly-once expectations",
      "Late data handling"
    ],
    "tags": [],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-031",
    "title": "Design a self-service analytics environment with production data access safeguards.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a self-service analytics environment with production data access safeguards.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-033",
    "title": "Design a query cost governance system.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a query cost governance system.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-034",
    "title": "Design an incident management workflow for data outages.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design an incident management workflow for data outages.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-036",
    "title": "Design a semantic layer migration plan from ad-hoc SQL to certified metrics.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a semantic layer migration plan from ad-hoc SQL to certified metrics.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-037",
    "title": "Design alert deduplication for data quality incidents.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design alert deduplication for data quality incidents.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-039",
    "title": "Design a dashboard freshness SLO system.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a dashboard freshness SLO system.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-040",
    "title": "Design cross-region analytics disaster recovery.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design cross-region analytics disaster recovery.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-006",
    "title": "Design Metadata Catalog and Lineage",
    "category": "System Design",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design a catalog that shows dataset ownership, freshness, schema, lineage, quality status, and metric definitions.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Metadata ingestion",
      "Column/table lineage",
      "Ownership and tags",
      "Integration with governance tools"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-007",
    "title": "Design AI-Assisted Data Development Guardrails",
    "category": "System Design",
    "difficulty": "Medium",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design guardrails for AI-native data development: natural language SQL, generated pipelines, review gates, and safe production promotion.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Security boundaries",
      "Human review",
      "Test generation and validation",
      "Auditability"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-SYS-008",
    "title": "Scale Event Ingestion to 100B Events/Day",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P1",
    "runtime": "rubric",
    "prompt": "Design global event ingestion for 100B events/day with privacy, ordering, dedupe, late events, and low cost.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Partitioning and throughput",
      "Exactly-once vs at-least-once",
      "Dedupe keys",
      "Regional compliance"
    ],
    "tags": [],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-053",
    "title": "Create a dbt test suite for a fact table.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Create a dbt test suite for a fact table.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-056",
    "title": "Explain task-level vs DAG-level retries.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Explain task-level vs DAG-level retries.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QAIR-059",
    "title": "Design CI checks for generated DAG configs.",
    "category": "Airflow/dbt",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design CI checks for generated DAG configs.\n\nAnswer structure: DAG/model layout, dependencies, idempotency, testing, backfills, alerting, and ownership.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-071",
    "title": "Tell me about reducing cloud/data warehouse cost.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Tell me about reducing cloud/data warehouse cost.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-074",
    "title": "Tell me about building trust in a dataset after quality issues.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Tell me about building trust in a dataset after quality issues.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-077",
    "title": "Tell me about a time your technical bet was wrong.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Tell me about a time your technical bet was wrong.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QBEH-080",
    "title": "Tell me about using AI tools responsibly in engineering work.",
    "category": "Behavioral",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Tell me about using AI tools responsibly in engineering work.\n\nAnswer structure: use STAR/L format: Situation, Task, Actions, measurable Result, and Lesson or follow-up system change.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-023",
    "title": "Model external sharing risk and audit events.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Model external sharing risk and audit events.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-026",
    "title": "Model device-level sync health.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Model device-level sync health.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QDM-029",
    "title": "Design lineage-aware data product ownership tables.",
    "category": "Data Modeling",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design lineage-aware data product ownership tables.\n\nAnswer structure: state grain, entities, fact/dimension tables, keys, SCD/history strategy, partitioning, data quality checks, and downstream consumers.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-062",
    "title": "Handle novelty effects in a sharing flow experiment.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Handle novelty effects in a sharing flow experiment.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-065",
    "title": "Define guardrails for an AI summarization feature.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Define guardrails for an AI summarization feature.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QEXP-068",
    "title": "Design holdouts for long-term product impact.",
    "category": "Experimentation",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design holdouts for long-term product impact.\n\nAnswer structure: hypothesis, unit of randomization, primary metric, guardrails, sample-size reasoning, validity risks, and launch decision.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-011",
    "title": "Implement a streaming top-k heavy hitters algorithm.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Implement a streaming top-k heavy hitters algorithm.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-014",
    "title": "Implement a min-cost coin change function.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Implement a min-cost coin change function.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-017",
    "title": "Write a retry wrapper with exponential backoff.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Write a retry wrapper with exponential backoff.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QPY-020",
    "title": "Normalize event names with a configurable mapping.",
    "category": "Python",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Normalize event names with a configurable mapping.\n\nAnswer structure: clarify assumptions, propose approach, discuss edge cases, and explain tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSQL-002",
    "title": "Cohort Retention Month 1, Month 2, Month 3",
    "category": "SQL",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "sql",
    "prompt": "Compute month-1, month-2, and month-3 retention by signup cohort. Cohort month is the calendar month of signup_date. A user is retained in month N if they had at least one activity event in the Nth calendar month after their signup cohort month. Output cohort_month, cohort_size, m1_retained, m2_retained, m3_retained ordered by cohort_month.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH cohorts AS (\n  SELECT user_id, substr(signup_date, 1, 7) AS cohort_month\n  FROM users\n)\nSELECT ...;",
    "setup": "CREATE TABLE users(user_id INTEGER, signup_date TEXT);\nINSERT INTO users VALUES\n(1,'2024-01-05'),(2,'2024-01-15'),(3,'2024-02-01'),(4,'2024-01-20'),(5,'2024-02-12');\nCREATE TABLE activity(user_id INTEGER, activity_date TEXT);\nINSERT INTO activity VALUES\n(1,'2024-02-01'),(1,'2024-03-05'),\n(2,'2024-04-10'),\n(3,'2024-03-15'),(3,'2024-05-01'),\n(5,'2024-04-20'),(5,'2024-05-21');",
    "expected": [
      {
        "cohort_month": "2024-01",
        "cohort_size": 3,
        "m1_retained": 1,
        "m2_retained": 1,
        "m3_retained": 1
      },
      {
        "cohort_month": "2024-02",
        "cohort_size": 2,
        "m1_retained": 1,
        "m2_retained": 1,
        "m3_retained": 2
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "cohorts",
      "retention",
      "date logic"
    ],
    "day": "Day 4",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-005",
    "title": "Cumulative Storage Usage per Team by Day",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "sql",
    "prompt": "Compute cumulative storage usage per team by day. storage_events contains daily deltas in GB. Multiple rows can occur for the same team and date; aggregate them before computing the cumulative total. Output team_id, event_date, daily_delta_gb, cumulative_storage_gb ordered by team_id, event_date.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "WITH daily AS (\n  SELECT team_id, event_date, SUM(delta_gb) AS daily_delta_gb\n  FROM storage_events\n  GROUP BY team_id, event_date\n)\nSELECT ...;",
    "setup": "CREATE TABLE storage_events(team_id INTEGER, event_date TEXT, delta_gb INTEGER);\nINSERT INTO storage_events VALUES\n(1,'2024-01-01',10),(1,'2024-01-01',5),(1,'2024-01-02',-3),(1,'2024-01-04',8),\n(2,'2024-01-01',20),(2,'2024-01-03',10),(2,'2024-01-04',-5);",
    "expected": [
      {
        "team_id": 1,
        "event_date": "2024-01-01",
        "daily_delta_gb": 15,
        "cumulative_storage_gb": 15
      },
      {
        "team_id": 1,
        "event_date": "2024-01-02",
        "daily_delta_gb": -3,
        "cumulative_storage_gb": 12
      },
      {
        "team_id": 1,
        "event_date": "2024-01-04",
        "daily_delta_gb": 8,
        "cumulative_storage_gb": 20
      },
      {
        "team_id": 2,
        "event_date": "2024-01-01",
        "daily_delta_gb": 20,
        "cumulative_storage_gb": 20
      },
      {
        "team_id": 2,
        "event_date": "2024-01-03",
        "daily_delta_gb": 10,
        "cumulative_storage_gb": 30
      },
      {
        "team_id": 2,
        "event_date": "2024-01-04",
        "daily_delta_gb": -5,
        "cumulative_storage_gb": 25
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "running total",
      "window functions"
    ],
    "day": "Day 3",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSQL-008",
    "title": "Users Who Shared Files but Never Uploaded",
    "category": "SQL",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "sql",
    "prompt": "Find users who shared at least one file but never uploaded any file. Output user_id ordered ascending.\n\nReturn exactly the requested columns in the requested order.",
    "starter": "SELECT DISTINCT ...\nFROM shares s\nWHERE NOT EXISTS (...);",
    "setup": "CREATE TABLE uploads(user_id INTEGER, file_id INTEGER, uploaded_at TEXT);\nINSERT INTO uploads VALUES\n(1,100,'2024-01-01'),(3,300,'2024-01-03'),(5,500,'2024-01-04');\nCREATE TABLE shares(sender_user_id INTEGER, file_id INTEGER, shared_at TEXT);\nINSERT INTO shares VALUES\n(1,100,'2024-01-02'),(2,200,'2024-01-02'),(2,201,'2024-01-03'),(4,400,'2024-01-04'),(5,500,'2024-01-05');",
    "expected": [
      {
        "user_id": 2
      },
      {
        "user_id": 4
      }
    ],
    "testCode": "",
    "rubric": [],
    "tags": [
      "anti join",
      "behavioral segments"
    ],
    "day": "Day 6",
    "source": "Role-aligned original, runnable SQL fixture v5"
  },
  {
    "id": "DBX-QSPK-041",
    "title": "Explain wide vs narrow transformations with Dropbox event examples.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Explain wide vs narrow transformations with Dropbox event examples.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 1",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-044",
    "title": "Explain broadcast join failure modes.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Explain broadcast join failure modes.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 4",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-047",
    "title": "Explain Delta time travel for metric debugging.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Explain Delta time travel for metric debugging.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 7",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSPK-050",
    "title": "Design a compaction schedule for Delta tables.",
    "category": "Spark/Databricks",
    "difficulty": "Medium",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design a compaction schedule for Delta tables.\n\nAnswer structure: explain the failure mode, diagnosis signals, optimization levers, correctness risks, and validation plan.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 3",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-032",
    "title": "Design a PII deletion pipeline for analytics stores.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design a PII deletion pipeline for analytics stores.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 6",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-035",
    "title": "Design a data product release process with CI/CD.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design a data product release process with CI/CD.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 2",
    "source": "Role-aligned original"
  },
  {
    "id": "DBX-QSYS-038",
    "title": "Design a platform for reproducible metric backtests.",
    "category": "System Design",
    "difficulty": "Hard",
    "priority": "P2",
    "runtime": "rubric",
    "prompt": "Design a platform for reproducible metric backtests.\n\nAnswer structure: clarify requirements, propose architecture, describe data flow, storage/compute choices, reliability, observability, scale limits, and tradeoffs.",
    "starter": "",
    "setup": "",
    "expected": [],
    "testCode": "",
    "rubric": [
      "Clarify assumptions",
      "State approach",
      "Discuss scale/reliability tradeoffs",
      "Mention validation/edge cases"
    ],
    "tags": [
      "quick-fire"
    ],
    "day": "Day 5",
    "source": "Role-aligned original"
  }
];
