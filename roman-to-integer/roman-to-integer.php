class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s) {
        $roman = array(
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000
    );
    $result = 0;
    $len = strlen($s);
    for ($i = 0; $i < $len; $i++) {
        $c = $s[$i];
        if ($i + 1 < $len && $roman[$c] < $roman[$s[$i + 1]]) {
            $result -= $roman[$c];
        } else {
            $result += $roman[$c];
        }
    }
    return $result;
    }
}