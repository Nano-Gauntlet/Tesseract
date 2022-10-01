import requests
import multiprocessing as mp
import time 

# TODO: create a decorator to track time 

def queryArticleByIdRange(startId, endId):
	Ids = []
	print("querying id: {}".format(startId))
	for i in range(startId, endId+1):
		res = requests.get("https://svs.gsfc.nasa.gov/{}".format(i))
		if "Page Not Found" not in res.text:
			Ids.append(i)
	return Ids

def queryArticlesByAPI(offset, limit):
	Ids = []
	results = requests.get(f"https://svs.gsfc.nasa.gov/search/api?limit={limit}&offset={offset}&sort_by=id").json()
	for result in results["results"]:
		Ids.append(result["a_id"])
	return Ids

def queryArticleMetadata(offset, limit):
	results = requests.get(f"https://svs.gsfc.nasa.gov/search/api?limit={limit}&offset={offset}&sort_by=id").json()
	return results["results"]


def runArticleCollector(start, end, stepSize):
	st = time.time()
	tasks = [(i, i+stepSize) for i in range(start, end-stepSize+1, stepSize)]
	print("no of tasks: {}".format(len(tasks)))
	num_workers = mp.cpu_count()
	print("number of workers: {}".format(num_workers))
	pool = mp.Pool(num_workers)
	multiple_results = [pool.apply_async(queryArticleByIdRange, task) for task in tasks]
	outputs = [res.get(timeout=100) for res in multiple_results]
	result = []
	for i in outputs:
		result.extend(i)
	et = time.time()
	print(f"Time taken for results: {et-st}")
	# print(result)
	return result

def runAPICaller(start, end, stepSize):
	st = time.time()

	tasks = [(i, stepSize) for i in range(start, end-stepSize+1, stepSize)]
	print("no of tasks: {}".format(len(tasks)))
	num_workers = mp.cpu_count()
	print("number of workers: {}".format(num_workers))
	
	pool = mp.Pool(num_workers)
	multiple_results = [pool.apply_async(queryArticlesByAPI, task) for task in tasks]
	outputs = [res.get(timeout=100) for res in multiple_results]
	
	result = []
	for i in outputs:
		result.extend(i)
	
	et = time.time()
	print(f"Time taken for results: {et-st}")
	# print(result)
	return result


def runMetadataCollector(start, end, stepSize):
	st = time.time()

	tasks = [(i, stepSize) for i in range(start, end-stepSize+1, stepSize)]
	print("no of tasks: {}".format(len(tasks)))
	num_workers = mp.cpu_count()
	print("number of workers: {}".format(num_workers))

	pool = mp.Pool(num_workers)
	multiple_results = [pool.apply_async(queryArticleMetadata, task) for task in tasks]
	outputs = [res.get(timeout=100) for res in multiple_results]

	result = []
	for i in outputs:
		result.extend(i)

	et = time.time()
	print(f"Time taken for results: {et-st}")
	# print(result)
	return result

