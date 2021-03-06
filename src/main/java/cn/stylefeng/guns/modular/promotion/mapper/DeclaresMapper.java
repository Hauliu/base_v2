package cn.stylefeng.guns.modular.promotion.mapper;

import cn.stylefeng.guns.modular.promotion.entity.Declares;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

/**
 * 用户协议Mapper 接口
 *
 * @author yaying.liu
 * @Date 2019-10-12 19:31:14
 */
public interface DeclaresMapper extends BaseMapper<Declares> {

    Page<Map<String,Object>> selectByCondition(@Param("page") Page page, @Param("condition") String condition);

}