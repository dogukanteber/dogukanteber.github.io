---
title: parallelDecompose
description: A parallel version of OpenFOAM's decomposePar that cuts mesh decomposition time by 49%, built during my PRACE Summer of HPC internship.
status: archived
hideStatus: true
context: PRACE Summer of HPC
repo: https://github.com/dogukanteber/hydrology/tree/main/applications/utilities/parallelProcessing
milestone: true
date: 2022-08-18
---

parallelDecompose is a parallel version of [decomposePar](https://www.openfoam.com/documentation/guides/latest/man/decomposePar.html), the [OpenFOAM](https://www.openfoam.com/) utility that splits a simulation's mesh across processors before a parallel run.

decomposePar runs on a single core, so on large meshes the split itself becomes a bottleneck. parallelDecompose does the same job with MPI, spreading the mesh and its fields across processes using domain decomposition. It supports simple decomposition on structured meshes, produces the same output as decomposePar, and cut decomposition time by 49%.

## The Internship

I built it during a two-month PRACE Summer of HPC internship at Géosciences Environnement Toulouse, where researchers use OpenFOAM to model permafrost thaw and water infiltration. My mentor had already tried the existing tools without much speedup, so we built our own. I came in as a software engineering student who had never used OpenFOAM and barely knew parallel programming. He gave me an MPI exercise before day one, and I spent the first weeks reading decomposePar's source until meshes started to make sense.

Much of the learning happened in public. When I got stuck, I [asked the OpenFOAM community](https://www.cfd-online.com/Forums/openfoam-programming-development/243964-parallelizing-decomposepar-utility.html), and a long-time OpenFOAM developer replied that it was "not a realistic task as an internship at all." I shipped it anyway. Afterward, I wrote the guide I wished I'd had and [shared it with the community](https://www.cfd-online.com/Forums/openfoam-programming-development/244781-parallel-programming-openfoam.html). Users tried the tool, reported it was much faster, and asked for more partitioning methods.

## Why it's a milestone

It showed I can learn a hard field quickly and still deliver. In two months, I went from knowing nothing about OpenFOAM or parallel programming to shipping a tool an experienced developer had called unrealistic for an intern, and that the OpenFOAM community picked up and asked to extend.

Related notes: [Parallel Programming in OpenFOAM](/notes/parallel-openfoam/) and [Can You Briefly Explain The Domain Decomposition Method?](/notes/domain-decomposition/)
