object Solution {
    def convert(s: String, numRows: Int): String = {
        if (numRows == 1) return s
        val n = s.length
        val result = new StringBuilder
        val step = 2 * numRows - 2
        for (i <- 0 until numRows) {
            var j = i
            while (j < n) {
                result.append(s(j))
                if (i != 0 && i != numRows - 1) {
                    val k = j + step - 2 * i
                    if (k < n) result.append(s(k))
                }
                j += step
            }
        }
        result.toString
    }
}

        
