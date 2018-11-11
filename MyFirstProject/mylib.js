module.exports.foreach = function(arr, first, last, binaryOp)
{
	for(; first != last; ++first)
	{
		binaryOp(arr, first);
	}
}
module.exports.accumulate = function (arr, first, last, temp, binaryOp) 
{

	for(; first != last; ++first)
	{
		temp = binaryOp(temp, arr[first]);
	}
	return temp;
}
module.exports.min_element = function (arr, first, last, binaryPr)
{
	let min_index = first;
	let min_el = arr[first];
	for(; first != last; ++first)
	{
		if(binaryPr(arr[first], min_el))
		{
			min_el = arr[first];
			min_index = first;
		}
		
	}
	return min_index;
}
module.exports.fill = function (arr, first, last, func)
{
	for(; first!= last; ++first)
	{
		arr[first] = func(first);
	}
}
module.exports.pushArray = function(arr, times, func)
{
	for(let i = 0; i != times; ++i)
	{
		arr.push(func(i));
	}
}