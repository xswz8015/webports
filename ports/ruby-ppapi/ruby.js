/*
 * Copyright (c) 2013 The Native Client Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

NaClProcessManager.prefix = 'ruby'
NaClProcessManager.nmf = 'ruby.nmf'

/*
 * Pass /bin/irb as argv[1] by default so we get an interactive
 * shell
 */
NaClProcessManager.argv = ['/bin/irb']
