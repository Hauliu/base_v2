package cn.stylefeng.guns.modular.bulletin.mapper;


import cn.stylefeng.guns.modular.bulletin.entity.AppVersion;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

public interface AppVersionMapper extends BaseMapper<AppVersion> {
    Page<Map<String,Object>> selectByCondition(@Param("page") Page page, @Param("condition") String condition);
}