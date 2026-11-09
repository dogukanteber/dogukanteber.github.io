---
title: HPC Cluster on GCP
description: The HPC cluster Woodwell's scientists run climate models on, at 83% less than regular machines would cost.
status: live
hideStatus: true
context: Woodwell Climate Research Center
repo: https://github.com/whrc/hpc-cluster
milestone: true
date: 2025-03-05
---

I built the HPC cluster Woodwell's scientists use to run climate models at scale, at 83% less than regular machines would cost.

I built it for the Arctic team's permafrost simulations. After that worked, the Risk team used it to map flood risk across all of Ethiopia, and the Carbon team came to run their carbon model on it too. It's still in use, and I wrote a [paper](https://doi.org/10.21203/rs.3.rs-6498728/v1) that goes deep into the design.

## Alaska at 1 km

The biggest run modeled permafrost carbon, nitrogen, and soil dynamics for every square kilometer of Alaska and parts of Canada. It read 188 GB of input, wrote 6.4 TB of output, and finished in 2 days and 6 hours on 192 spot machines, for \$2,708. That's a whole region at 1 km resolution, from start to finish, in about two days.

## Flood Risk Across Ethiopia

High-resolution flood models, with grid cells under 30 meters, rarely cover more than a county because the computation grows with every cell. On the cluster, the Risk team split Ethiopia into thousands of watersheds and modeled them in parallel. A run that would have taken weeks finished in under 3 days.

That made a country-wide view of flood risk possible, including rural and pastoral communities that smaller analyses leave out. The findings went into a [climate risk report](https://www.woodwellclimate.org/climate-risk-assessment-ethiopia/) presented to Ethiopian ministries, embassies, and the UN.

## Spot Machines

The simulations can be interrupted and rerun, so I ran them on spot machines, which Google sells at a steep discount but can take back at any time.

I tracked 8,608 preemptions to map out when they're least likely, and we schedule runs around those hours. When a machine is taken back anyway, its job moves to a regular machine automatically, so every run finishes.

## From NetCDF to Zarr

I moved the team's output from NetCDF to Zarr, a format built for cloud storage. Reads and writes are faster, files are over 80% smaller, and scientists can open the results straight from cloud storage to inspect them.

## A CLI for Scientists

I wrote [bp](https://github.com/whrc/batch-processing) so scientists don't have to memorize a pile of cluster commands. It splits the input into jobs, submits them, and merges the results, so a full run takes a few commands.

## Why it's a milestone

I owned the whole pipeline, from the cloud setup to the CLI scientists use, and it made science possible that the budget wouldn't have allowed otherwise. Research funding leaves little for computing, so cutting the time and cost of a run decides which questions get asked at all.

I worked with the scientists to understand the models they run and the data those models produce, and designed the cluster around them. That's why it held up beyond the Arctic team, and why three teams still run their work on it.
