export default function multiFilter() {
  return function(arr, searchString) {
        var result = {};
        angular.forEach(arr, function(value, key) {
            if (value === searchString) {
                result[key] = value;
            }
        });
        return result;
    };
}