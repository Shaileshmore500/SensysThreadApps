copy web.config web.config.old /Y
copy redisconfig\web.redis.config  web.config /Y
echo n | copy /-y redisconfig\redis_cache.config redis_cache.config
echo n | copy /-y redisconfig\redis_session.config redis_session.config
echo n | copy /-y redisconfig\redis_settings.config redis_settings.config
echo n | copy /-y redisconfig\redis_devcontrols.config redis_devcontrols.config
pause