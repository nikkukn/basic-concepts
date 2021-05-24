# Difference between yarn and npm

1. **Fast**-Yarn caches every package it downloads so it never needs to again.

2. **Reliable** - Using a detailed, but concise, lockfile format, and a deterministic algorithm for installs, Yarn is able to guarantee that an install that worked on one system will work exactly the same way on any other system.

3. **Secure** - Yarn uses checksums to verify the integrity of every installed package before its code is executed.

4. **Offline Mode** -  If you've installed a package before, you can install it again without any internet connection.

5. **Deterministic** - The same dependencies will be installed the same exact way across every machine regardless of install order.

6. **Network Performance** - Yarn efficiently queues up requests and avoids request waterfalls in order to maximize network utilization.

7. **Multiple Registries** - Install any package from either npm or Bower and keep your package workflow the same.

8. **Network Resilience** - A single request failing won't cause an install to fail. Requests are retried upon failure.

9. **Flat Mode** - Resolve mismatching versions of dependencies to a single version to avoid creating duplicates.