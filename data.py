#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
#
# Copyright © 2012 Blurrcat <blurrcat@gmail.com>
#

"""
This script converts GRE.txt into json format
"""
from csv import reader as creader
import simplejson as json
import os
from random import shuffle


def parse(csv_file, word_loc, def_loc, delimiter='\t'):
    words = []
    with open(csv_file) as f:
        reader = creader(f, delimiter=delimiter)
        for row in reader:
            words.append((row[word_loc], row[def_loc]))
    print "# of words: %d" % len(words)
    return words


def to_json(data, out_file):
    with open(out_file, 'w') as f:
        json.dump(data, f)


def to_lists(data, list_num):
    shuffle(data)
    list_l = len(data) / list_num
    lists = []
    i = 0
    for i in xrange(list_num - 1):
        lists.append(data[i * list_l: (i + 1) * list_l])
    lists.append(data[(i + 1) * list_l:])
    return lists, len(data)


def convert(csv_file, word_loc, def_loc):
    out = csv_file.split('.')[0] + '.json'
    to_json(parse(csv_file, word_loc, def_loc), out)


def convert_to_lists(settings):
    data = []
    for setting in settings:
        data.extend(parse(*setting))
    lists, total = to_lists(data, 20)
    words = {}
    for i, list_ in enumerate(lists):
        words["list_%d" % i] = list_
    words['word_count'] = total
    words['list_count'] = len(lists)
    to_json(words, "public/data/words.json")

if __name__ == "__main__":
    settings = [('08GREcore.csv', 1, 2), ('08GREnew.csv', 0, 1)]
    convert_to_lists(settings)
