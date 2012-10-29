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


def parse(csv_file, word_loc, def_loc, delimiter='\t'):
    words = []
    with open(csv_file) as f:
        reader = creader(f, delimiter=delimiter)
        for row in reader:
            words.append((row[word_loc], row[def_loc]))
    print "# of words: %d" % len(words)
    return {'words': words}


def to_json(data, out_file):
    with open(out_file, 'w') as f:
        json.dump(data, f)


def convert(csv_file, word_loc, def_loc):
    out = csv_file.split('.')[0] + '.json'
    to_json(parse(csv_file, word_loc, def_loc), out)

if __name__ == "__main__":
    settings = [('08GREcore.csv', 1, 2), ('08GREnew.csv', 0, 1)]
    for setting in settings:
        convert(*setting)
