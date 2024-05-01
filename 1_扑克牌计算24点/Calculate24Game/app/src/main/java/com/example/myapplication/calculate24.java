package com.example.myapplication;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;

public class calculate24 {
    static final int TARGET = 24;
    static final double EPSILON = 1e-6;
    static final int ADD = 0, MUL = 1, SUB = 2, DIV = 3;
    private List<String> equations = new ArrayList<>();

    public List<String> find24Expressions(int[] cards) {
        equations.clear();

        List<Double> numbers = new ArrayList<>();  // 存储操作数
        List<String> numStr = new ArrayList<>();    // 存储表达式

        for (int num : cards) {
            numbers.add((double) num);
            numStr.add(Integer.toString(num));
        }

        solve24(numbers, numStr);

        // 表达式去重
        equations = new ArrayList<>(new LinkedHashSet<>(equations));
        return equations;
    }

    private void solve24(List<Double> numbers, List<String> numStr) {
        if (numbers.size() == 0) {
            return;
        }

        if (numbers.size() == 1) {
            if (Math.abs(numbers.get(0) - TARGET) < EPSILON) {
                String equation = numStr.get(0);
                equations.add(equation.substring(1, equation.length() - 1) + "=24");
            }
            return;
        }

        int n = numbers.size();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i != j) {
                    List<Double> newNumbers = new ArrayList<>();
                    List<String> newNumStr = new ArrayList<>();

                    for (int z = 0; z < n; z++) {
                        if (z != i && z != j) {
                            newNumbers.add(numbers.get(z));
                            newNumStr.add(numStr.get(z));
                        }
                    }

                    for (int op = 0; op <= 3; op++) {
                        if (i < j && op <= 1) continue;

                        if (op == ADD) {
                            newNumbers.add(numbers.get(i) + numbers.get(j));
                            newNumStr.add("(" + numStr.get(i) + "+" + numStr.get(j) + ")");
                        } else if (op == MUL) {
                            newNumbers.add(numbers.get(i) * numbers.get(j));
                            newNumStr.add("(" + numStr.get(i) + "*" + numStr.get(j) + ")");
                        } else if (op == SUB) {
                            newNumbers.add(numbers.get(i) - numbers.get(j));
                            newNumStr.add("(" + numStr.get(i) + "-" + numStr.get(j) + ")");
                        } else if (op == DIV) {
                            if (Math.abs(numbers.get(j)) < EPSILON) continue;
                            else {
                                newNumbers.add(numbers.get(i) / numbers.get(j));
                                newNumStr.add("(" + numStr.get(i) + "/" + numStr.get(j) + ")");
                            }
                        }

                        solve24(newNumbers, newNumStr);

                        newNumbers.remove(newNumbers.size() - 1);
                        newNumStr.remove(newNumStr.size() - 1);
                    }
                }
            }
        }
    }
}
